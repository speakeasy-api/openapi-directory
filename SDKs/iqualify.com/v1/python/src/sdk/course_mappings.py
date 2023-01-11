import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CourseMappings:
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

    
    def delete_course_mappings_offering_id_external_course_id_(self, request: operations.DeleteCourseMappingsOfferingIDExternalCourseIDRequest) -> operations.DeleteCourseMappingsOfferingIDExternalCourseIDResponse:
        r"""Remove course mapping
        Removes the course mapping between the offering and the externalCourseId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/course-mappings/{offeringId}/{externalCourseId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCourseMappingsOfferingIDExternalCourseIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.delete_course_mappings_offering_id_external_course_id_200_application_json_strings = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_course_mappings(self) -> operations.GetCourseMappingsResponse:
        r"""Find course mappings
        Returns all course mappings for course offerings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/course-mappings"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCourseMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, str]])
                res.course_mappings = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_course_mappings_externalcourse_external_course_id_(self, request: operations.GetCourseMappingsExternalcourseExternalCourseIDRequest) -> operations.GetCourseMappingsExternalcourseExternalCourseIDResponse:
        r"""Find course mappings by externalCourseId
        Responds with course mapping details by externalCourseId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/course-mappings/externalcourse/{externalCourseId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCourseMappingsExternalcourseExternalCourseIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_course_mappings_externalcourse_external_course_id_200_application_json_strings = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_course_mappings_offering_id_(self, request: operations.GetCourseMappingsOfferingIDRequest) -> operations.GetCourseMappingsOfferingIDResponse:
        r"""Find course mappings by offeringId
        Responds with course mapping details by offeringId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/course-mappings/{offeringId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCourseMappingsOfferingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_course_mappings_offering_id_200_application_json_strings = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def put_course_mappings_offering_id_external_course_id_(self, request: operations.PutCourseMappingsOfferingIDExternalCourseIDRequest) -> operations.PutCourseMappingsOfferingIDExternalCourseIDResponse:
        r"""Add course mapping
        Creates a mapping between the offering and the externalCourseId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/course-mappings/{offeringId}/{externalCourseId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCourseMappingsOfferingIDExternalCourseIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.put_course_mappings_offering_id_external_course_id_200_application_json_strings = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    