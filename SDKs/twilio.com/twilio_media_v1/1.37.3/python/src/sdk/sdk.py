

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://media.twilio.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_media_processor(self, request: operations.CreateMediaProcessorRequest) -> operations.CreateMediaProcessorResponse:
        base_url = operations.CREATE_MEDIA_PROCESSOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/MediaProcessors"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMediaProcessorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1MediaProcessor])
                res.media_v1_media_processor = out

        return res

    
    def create_player_streamer(self, request: operations.CreatePlayerStreamerRequest) -> operations.CreatePlayerStreamerResponse:
        base_url = operations.CREATE_PLAYER_STREAMER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/PlayerStreamers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePlayerStreamerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1PlayerStreamer])
                res.media_v1_player_streamer = out

        return res

    
    def create_player_streamer_playback_grant(self, request: operations.CreatePlayerStreamerPlaybackGrantRequest) -> operations.CreatePlayerStreamerPlaybackGrantResponse:
        base_url = operations.CREATE_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePlayerStreamerPlaybackGrantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant])
                res.media_v1_player_streamer_player_streamer_playback_grant = out

        return res

    
    def delete_media_recording(self, request: operations.DeleteMediaRecordingRequest) -> operations.DeleteMediaRecordingResponse:
        r"""Deletes a MediaRecording resource identified by a SID.
        """
        
        base_url = operations.DELETE_MEDIA_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/MediaRecordings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMediaRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_media_processor(self, request: operations.FetchMediaProcessorRequest) -> operations.FetchMediaProcessorResponse:
        r"""Returns a single MediaProcessor resource identified by a SID.
        """
        
        base_url = operations.FETCH_MEDIA_PROCESSOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/MediaProcessors/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMediaProcessorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1MediaProcessor])
                res.media_v1_media_processor = out

        return res

    
    def fetch_media_recording(self, request: operations.FetchMediaRecordingRequest) -> operations.FetchMediaRecordingResponse:
        r"""Returns a single MediaRecording resource identified by a SID.
        """
        
        base_url = operations.FETCH_MEDIA_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/MediaRecordings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMediaRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1MediaRecording])
                res.media_v1_media_recording = out

        return res

    
    def fetch_player_streamer(self, request: operations.FetchPlayerStreamerRequest) -> operations.FetchPlayerStreamerResponse:
        r"""Returns a single PlayerStreamer resource identified by a SID.
        """
        
        base_url = operations.FETCH_PLAYER_STREAMER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/PlayerStreamers/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPlayerStreamerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1PlayerStreamer])
                res.media_v1_player_streamer = out

        return res

    
    def fetch_player_streamer_playback_grant(self, request: operations.FetchPlayerStreamerPlaybackGrantRequest) -> operations.FetchPlayerStreamerPlaybackGrantResponse:
        r"""**This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
        """
        
        base_url = operations.FETCH_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPlayerStreamerPlaybackGrantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant])
                res.media_v1_player_streamer_player_streamer_playback_grant = out

        return res

    
    def list_media_processor(self, request: operations.ListMediaProcessorRequest) -> operations.ListMediaProcessorResponse:
        r"""Returns a list of MediaProcessors.
        """
        
        base_url = operations.LIST_MEDIA_PROCESSOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/MediaProcessors"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMediaProcessorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMediaProcessorListMediaProcessorResponse])
                res.list_media_processor_response = out

        return res

    
    def list_media_recording(self, request: operations.ListMediaRecordingRequest) -> operations.ListMediaRecordingResponse:
        r"""Returns a list of MediaRecordings.
        """
        
        base_url = operations.LIST_MEDIA_RECORDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/MediaRecordings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMediaRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMediaRecordingListMediaRecordingResponse])
                res.list_media_recording_response = out

        return res

    
    def list_player_streamer(self, request: operations.ListPlayerStreamerRequest) -> operations.ListPlayerStreamerResponse:
        r"""Returns a list of PlayerStreamers.
        """
        
        base_url = operations.LIST_PLAYER_STREAMER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/PlayerStreamers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPlayerStreamerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPlayerStreamerListPlayerStreamerResponse])
                res.list_player_streamer_response = out

        return res

    
    def update_media_processor(self, request: operations.UpdateMediaProcessorRequest) -> operations.UpdateMediaProcessorResponse:
        r"""Updates a MediaProcessor resource identified by a SID.
        """
        
        base_url = operations.UPDATE_MEDIA_PROCESSOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/MediaProcessors/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMediaProcessorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1MediaProcessor])
                res.media_v1_media_processor = out

        return res

    
    def update_player_streamer(self, request: operations.UpdatePlayerStreamerRequest) -> operations.UpdatePlayerStreamerResponse:
        r"""Updates a PlayerStreamer resource identified by a SID.
        """
        
        base_url = operations.UPDATE_PLAYER_STREAMER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/PlayerStreamers/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePlayerStreamerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaV1PlayerStreamer])
                res.media_v1_player_streamer = out

        return res

    