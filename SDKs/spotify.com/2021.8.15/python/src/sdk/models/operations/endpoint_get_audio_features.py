import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import audiofeaturesobject as shared_audiofeaturesobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAudioFeaturesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAudioFeaturesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAudioFeaturesSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAudioFeaturesRequest:
    headers: EndpointGetAudioFeaturesHeaders = dataclasses.field()
    path_params: EndpointGetAudioFeaturesPathParams = dataclasses.field()
    security: EndpointGetAudioFeaturesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAudioFeaturesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio_features_object: Optional[shared_audiofeaturesobject.AudioFeaturesObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
