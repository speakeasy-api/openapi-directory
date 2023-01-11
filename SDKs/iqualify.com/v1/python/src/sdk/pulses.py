import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Pulses:
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

    
    def get_offerings_offering_id_analytics_pulses(self, request: operations.GetOfferingsOfferingIDAnalyticsPulsesRequest) -> operations.GetOfferingsOfferingIDAnalyticsPulsesResponse:
        r"""Find all pulse IDs in the specified offering
        Responds with the IDs of all pulses that learners have responded to in a specified offering.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/pulses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsPulsesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_offerings_offering_id_analytics_pulses_200_application_json_strings = out
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

    
    def get_offerings_offering_id_analytics_pulses_pulse_id_responses(self, request: operations.GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesRequest) -> operations.GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesResponse:
        r"""Find pulses by offeringId and pulseId
        Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/pulses/{pulseId}/responses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PulseResponse]])
                res.pulse_responses = out
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

    