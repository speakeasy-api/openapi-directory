import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Personal:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def corridor(self, request: operations.CorridorRequest) -> operations.CorridorResponse:
        r"""[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CorridorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CorridorOut])
                res.corridor_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def corridor_batch(self, request: operations.CorridorBatchRequest) -> operations.CorridorBatchResponse:
        r"""[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/corridorBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CorridorBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCorridorOut])
                res.batch_corridor_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def country(self, request: operations.CountryRequest) -> operations.CountryResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/country/{personalNameFull}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGeoOut])
                res.personal_name_geo_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def country_batch(self, request: operations.CountryBatchRequest) -> operations.CountryBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/countryBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CountryBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGeoOut])
                res.batch_personal_name_geo_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def diaspora(self, request: operations.DiasporaRequest) -> operations.DiasporaResponse:
        r"""[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DiasporaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameDiasporaedOut])
                res.first_last_name_diasporaed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def diaspora_batch(self, request: operations.DiasporaBatchRequest) -> operations.DiasporaBatchResponse:
        r"""[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/diasporaBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiasporaBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameDiasporaedOut])
                res.batch_first_last_name_diasporaed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender(self, request: operations.GenderRequest) -> operations.GenderResponse:
        r"""Infer the likely gender of a name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/gender/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_batch(self, request: operations.GenderBatchRequest) -> operations.GenderBatchResponse:
        r"""Infer the likely gender of up to 100 names, detecting automatically the cultural context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full(self, request: operations.GenderFullRequest) -> operations.GenderFullResponse:
        r"""Infer the likely gender of a full name, ex. John H. Smith
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderFull/{fullName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full_batch(self, request: operations.GenderFullBatchRequest) -> operations.GenderFullBatchResponse:
        r"""Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderFullBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full_geo(self, request: operations.GenderFullGeoRequest) -> operations.GenderFullGeoResponse:
        r"""Infer the likely gender of a full name, given a local context (ISO2 country code).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderFullGeo/{fullName}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full_geo_batch(self, request: operations.GenderFullGeoBatchRequest) -> operations.GenderFullGeoBatchResponse:
        r"""Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderFullGeoBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_geo(self, request: operations.GenderGeoRequest) -> operations.GenderGeoResponse:
        r"""Infer the likely gender of a name, given a local context (ISO2 country code).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_geo_batch(self, request: operations.GenderGeoBatchRequest) -> operations.GenderGeoBatchResponse:
        r"""Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderGeoBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def origin(self, request: operations.OriginRequest) -> operations.OriginResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/origin/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OriginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameOriginedOut])
                res.first_last_name_origined_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def origin_batch(self, request: operations.OriginBatchRequest) -> operations.OriginBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/originBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OriginBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameOriginedOut])
                res.batch_first_last_name_origined_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name(self, request: operations.ParseNameRequest) -> operations.ParseNameResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseName/{nameFull}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name_batch(self, request: operations.ParseNameBatchRequest) -> operations.ParseNameBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseNameBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name_geo(self, request: operations.ParseNameGeoRequest) -> operations.ParseNameGeoResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseName/{nameFull}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name_geo_batch(self, request: operations.ParseNameGeoBatchRequest) -> operations.ParseNameGeoBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseNameGeoBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_race_ethnicity(self, request: operations.UsRaceEthnicityRequest) -> operations.UsRaceEthnicityResponse:
        r"""[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/usRaceEthnicity/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsRaceEthnicityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameUsRaceEthnicityOut])
                res.first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_race_ethnicity_batch(self, request: operations.UsRaceEthnicityBatchRequest) -> operations.UsRaceEthnicityBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/usRaceEthnicityBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsRaceEthnicityBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameUsRaceEthnicityOut])
                res.batch_first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_race_ethnicity_zip5(self, request: operations.UsRaceEthnicityZip5Request) -> operations.UsRaceEthnicityZip5Response:
        r"""[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsRaceEthnicityZip5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameUsRaceEthnicityOut])
                res.first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_zip_race_ethnicity_batch(self, request: operations.UsZipRaceEthnicityBatchRequest) -> operations.UsZipRaceEthnicityBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/usZipRaceEthnicityBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsZipRaceEthnicityBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameUsRaceEthnicityOut])
                res.batch_first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    