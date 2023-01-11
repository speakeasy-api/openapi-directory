import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MessagingV1ServiceUsAppToPersonUsecase:
    us_app_to_person_usecases: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('us_app_to_person_usecases') }})
    
