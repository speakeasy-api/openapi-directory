import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import audiofeaturesarrayobject as shared_audiofeaturesarrayobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetSeveralAudioFeaturesQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetSeveralAudioFeaturesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetSeveralAudioFeaturesSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetSeveralAudioFeaturesRequest:
    headers: EndpointGetSeveralAudioFeaturesHeaders = dataclasses.field()
    query_params: EndpointGetSeveralAudioFeaturesQueryParams = dataclasses.field()
    security: EndpointGetSeveralAudioFeaturesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetSeveralAudioFeaturesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio_features_array_object: Optional[shared_audiofeaturesarrayobject.AudioFeaturesArrayObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
