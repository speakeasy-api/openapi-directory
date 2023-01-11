import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTheStatusOfTheAPIService200ApplicationJSON:
    status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetTheStatusOfTheAPIServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_the_status_of_the_api_service_200_application_json_object: Optional[GetTheStatusOfTheAPIService200ApplicationJSON] = dataclasses.field(default=None)
    
