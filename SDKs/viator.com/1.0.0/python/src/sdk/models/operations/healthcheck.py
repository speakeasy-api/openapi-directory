import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class HealthCheckHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class HealthCheck200ApplicationJSON:
    all_good: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allGood') }})
    capi_ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capiOk') }})
    db_ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbOk') }})
    memcached_ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcachedOk') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class HealthCheckRequest:
    headers: HealthCheckHeaders = dataclasses.field()
    

@dataclasses.dataclass
class HealthCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    health_check_200_application_json_object: Optional[HealthCheck200ApplicationJSON] = dataclasses.field(default=None)
    
