import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRulesV4QueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRulesV4Headers:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyUtilizationThreshold:
    r"""PostRulesV4RequestBodyUtilizationThreshold
    Utilization event is triggered when the asset starts moving
    to indicate the asset is utilized, and also when the asset stops
    moving and has been stationary longer than the threshold duration
    to indicate the asset is unutilized.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PostRulesV4RequestBodyUtilizationTypeEnum(str, Enum):
    UTILIZATION = "utilization"


@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyUtilization:
    threshold: PostRulesV4RequestBodyUtilizationThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PostRulesV4RequestBodyUtilizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyDetentionThreshold:
    r"""PostRulesV4RequestBodyDetentionThreshold
    Detention event is triggered when the asset has been continuously stationary longer
    than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PostRulesV4RequestBodyDetentionTypeEnum(str, Enum):
    DETENTION = "detention"


@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyDetention:
    threshold: PostRulesV4RequestBodyDetentionThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PostRulesV4RequestBodyDetentionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyDwellingThreshold:
    r"""PostRulesV4RequestBodyDwellingThreshold
    Dwelling event is triggered when the asset has been continuously inside a geofence
    longer than the threshold duration.
    
    """
    
    duration_s: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    
class PostRulesV4RequestBodyDwellingTypeEnum(str, Enum):
    DWELLING = "dwelling"


@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyDwelling:
    threshold: PostRulesV4RequestBodyDwellingThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PostRulesV4RequestBodyDwellingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyStockThreshold:
    max_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVolume') }})
    min_volume: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minVolume') }})
    
class PostRulesV4RequestBodyStockTypeEnum(str, Enum):
    STOCK = "stock"


@dataclass_json
@dataclasses.dataclass
class PostRulesV4RequestBodyStock:
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    threshold: PostRulesV4RequestBodyStockThreshold = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    type: PostRulesV4RequestBodyStockTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PostRulesV4Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4201ApplicationJSON:
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRulesV4403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostRulesV4Request:
    headers: PostRulesV4Headers = dataclasses.field()
    query_params: PostRulesV4QueryParams = dataclasses.field()
    security: PostRulesV4Security = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRulesV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_rules_v4_201_application_json_object: Optional[PostRulesV4201ApplicationJSON] = dataclasses.field(default=None)
    post_rules_v4_400_application_json_object: Optional[PostRulesV4400ApplicationJSON] = dataclasses.field(default=None)
    post_rules_v4_401_application_json_object: Optional[PostRulesV4401ApplicationJSON] = dataclasses.field(default=None)
    post_rules_v4_403_application_json_object: Optional[PostRulesV4403ApplicationJSON] = dataclasses.field(default=None)
    
