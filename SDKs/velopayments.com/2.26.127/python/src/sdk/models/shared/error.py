import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordata as shared_errordata
from ..shared import localisationdetails as shared_localisationdetails

class ErrorLocationTypeEnum(str, Enum):
    REQUEST_BODY = "requestBody"
    QUERY_PARAM = "queryParam"
    REQUEST_PARAM = "requestParam"
    HEADER = "header"
    PATH_PARAM = "pathParam"


@dataclass_json
@dataclasses.dataclass
class Error:
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_data: Optional[shared_errordata.ErrorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorData') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    localisation_details: Optional[shared_localisationdetails.LocalisationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localisationDetails') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_type: Optional[ErrorLocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    reason_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    
