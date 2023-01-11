import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Chinese:
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

    
    def chinese_name_candidates(self, request: operations.ChineseNameCandidatesRequest) -> operations.ChineseNameCandidatesResponse:
        r"""Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_candidates_batch(self, request: operations.ChineseNameCandidatesBatchRequest) -> operations.ChineseNameCandidatesBatchResponse:
        r"""Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/chineseNameCandidatesBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_candidates_gender_batch(self, request: operations.ChineseNameCandidatesGenderBatchRequest) -> operations.ChineseNameCandidatesGenderBatchResponse:
        r"""Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/chineseNameCandidatesGenderBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameCandidatesGenderBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_gender_candidates(self, request: operations.ChineseNameGenderCandidatesRequest) -> operations.ChineseNameGenderCandidatesResponse:
        r"""Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameGenderCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_match(self, request: operations.ChineseNameMatchRequest) -> operations.ChineseNameMatchResponse:
        r"""Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameMatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchedOut])
                res.name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_match_batch(self, request: operations.ChineseNameMatchBatchRequest) -> operations.ChineseNameMatchBatchResponse:
        r"""Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/chineseNameMatchBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameMatchBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchedOut])
                res.batch_name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name(self, request: operations.GenderChineseNameRequest) -> operations.GenderChineseNameResponse:
        r"""Infer the likely gender of a Chinese full name ex. 王晓明
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderChineseName/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name_batch(self, request: operations.GenderChineseNameBatchRequest) -> operations.GenderChineseNameBatchResponse:
        r"""Infer the likely gender of up to 100 full names ex. 王晓明
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderChineseNameBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name_pinyin(self, request: operations.GenderChineseNamePinyinRequest) -> operations.GenderChineseNamePinyinResponse:
        r"""Infer the likely gender of a Chinese name in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNamePinyinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name_pinyin_batch(self, request: operations.GenderChineseNamePinyinBatchRequest) -> operations.GenderChineseNamePinyinBatchResponse:
        r"""Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderChineseNamePinyinBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNamePinyinBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_chinese_name(self, request: operations.ParseChineseNameRequest) -> operations.ParseChineseNameResponse:
        r"""Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseChineseName/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseChineseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_chinese_name_batch(self, request: operations.ParseChineseNameBatchRequest) -> operations.ParseChineseNameBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseChineseNameBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseChineseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def pinyin_chinese_name(self, request: operations.PinyinChineseNameRequest) -> operations.PinyinChineseNameResponse:
        r"""Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/pinyinChineseName/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PinyinChineseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def pinyin_chinese_name_batch(self, request: operations.PinyinChineseNameBatchRequest) -> operations.PinyinChineseNameBatchResponse:
        r"""Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/pinyinChineseNameBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PinyinChineseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    