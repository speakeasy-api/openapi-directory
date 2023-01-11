import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import audioanalysisobject as shared_audioanalysisobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAudioAnalysisPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAudioAnalysisHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAudioAnalysisSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAudioAnalysisRequest:
    headers: EndpointGetAudioAnalysisHeaders = dataclasses.field()
    path_params: EndpointGetAudioAnalysisPathParams = dataclasses.field()
    security: EndpointGetAudioAnalysisSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAudioAnalysisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio_analysis_object: Optional[shared_audioanalysisobject.AudioAnalysisObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
