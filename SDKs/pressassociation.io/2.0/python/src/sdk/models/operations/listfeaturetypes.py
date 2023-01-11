import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListFeatureTypesSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListFeatureTypesRequest:
    security: ListFeatureTypesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListFeatureTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_feature_types_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
