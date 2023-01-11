import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFeaturePathParams:
    feature_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'featureId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFeatureSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFeatureRequest:
    path_params: GetFeaturePathParams = dataclasses.field()
    security: GetFeatureSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeatureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_feature_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
