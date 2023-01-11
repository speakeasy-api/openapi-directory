

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


from .cache import Cache
from .conversation import Conversation
from .events import Events
from .permissions import Permissions
from .restricted import Restricted
from .schemas import Schemas
from .sessions import Sessions
from .story import Story
from .story_collaborators import StoryCollaborators
from .views import Views


SERVERS = [
	"https://presalytics.io/story",
]


class SDK:
    
    cache: Cache
    conversation: Conversation
    events: Events
    permissions: Permissions
    restricted: Restricted
    schemas: Schemas
    sessions: Sessions
    story: Story
    story_collaborators: StoryCollaborators
    views: Views

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
        
    
    
    
    def get_environment(self) -> operations.GetEnvironmentResponse:
        r"""Environment: Get
        pass rendering metadata to the client-side scripts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/environment/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_environment_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def spec_no_tags(self) -> operations.SpecNoTagsResponse:
        r"""Specification: No tags
        json-formatted version of this spec with the tags removed to help with codegen processes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/no_tags_spec"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SpecNoTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    