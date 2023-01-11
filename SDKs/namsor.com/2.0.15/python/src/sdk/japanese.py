import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Japanese:
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

    
    def gender_japanese_name_full(self, request: operations.GenderJapaneseNameFullRequest) -> operations.GenderJapaneseNameFullResponse:
        r"""Infer the likely gender of a Japanese full name ex. 王晓明
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderJapaneseNameFull/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNameFullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_full_batch(self, request: operations.GenderJapaneseNameFullBatchRequest) -> operations.GenderJapaneseNameFullBatchResponse:
        r"""Infer the likely gender of up to 100 full names
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderJapaneseNameFullBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNameFullBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_pinyin(self, request: operations.GenderJapaneseNamePinyinRequest) -> operations.GenderJapaneseNamePinyinResponse:
        r"""Infer the likely gender of a Japanese name in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNamePinyinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_pinyin_batch(self, request: operations.GenderJapaneseNamePinyinBatchRequest) -> operations.GenderJapaneseNamePinyinBatchResponse:
        r"""Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderJapaneseNameBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNamePinyinBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_gender_kanji_candidates_batch(self, request: operations.JapaneseNameGenderKanjiCandidatesBatchRequest) -> operations.JapaneseNameGenderKanjiCandidatesBatchResponse:
        r"""Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameGenderKanjiCandidatesBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameGenderKanjiCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_kanji_candidates(self, request: operations.JapaneseNameKanjiCandidatesRequest) -> operations.JapaneseNameKanjiCandidatesResponse:
        r"""Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameKanjiCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_kanji_candidates_batch(self, request: operations.JapaneseNameKanjiCandidatesBatchRequest) -> operations.JapaneseNameKanjiCandidatesBatchResponse:
        r"""Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameKanjiCandidatesBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameKanjiCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_kanji_candidates_1(self, request: operations.JapaneseNameKanjiCandidates1Request) -> operations.JapaneseNameKanjiCandidates1Response:
        r"""Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameKanjiCandidates1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_latin_candidates(self, request: operations.JapaneseNameLatinCandidatesRequest) -> operations.JapaneseNameLatinCandidatesResponse:
        r"""Romanize japanese name, based on the name in Kanji.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameLatinCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_latin_candidates_batch(self, request: operations.JapaneseNameLatinCandidatesBatchRequest) -> operations.JapaneseNameLatinCandidatesBatchResponse:
        r"""Romanize japanese names, based on the name in KANJI
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameLatinCandidatesBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameLatinCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_match(self, request: operations.JapaneseNameMatchRequest) -> operations.JapaneseNameMatchResponse:
        r"""Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameMatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchedOut])
                res.name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_match_batch(self, request: operations.JapaneseNameMatchBatchRequest) -> operations.JapaneseNameMatchBatchResponse:
        r"""Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameMatchBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameMatchBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchedOut])
                res.batch_name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_match_feedback_loop(self, request: operations.JapaneseNameMatchFeedbackLoopRequest) -> operations.JapaneseNameMatchFeedbackLoopResponse:
        r"""[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameMatchFeedbackLoopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeedbackLoopOut])
                res.feedback_loop_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_japanese_name(self, request: operations.ParseJapaneseNameRequest) -> operations.ParseJapaneseNameResponse:
        r"""Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseJapaneseName/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseJapaneseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_japanese_name_batch(self, request: operations.ParseJapaneseNameBatchRequest) -> operations.ParseJapaneseNameBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseJapaneseNameBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseJapaneseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    