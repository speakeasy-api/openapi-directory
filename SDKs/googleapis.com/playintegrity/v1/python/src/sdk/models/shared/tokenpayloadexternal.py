import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountdetails as shared_accountdetails
from ..shared import appintegrity as shared_appintegrity
from ..shared import deviceintegrity as shared_deviceintegrity
from ..shared import requestdetails as shared_requestdetails
from ..shared import testingdetails as shared_testingdetails


@dataclass_json
@dataclasses.dataclass
class TokenPayloadExternal:
    r"""TokenPayloadExternal
    Contains basic app information and integrity signals like device attestation and licensing details.
    """
    
    account_details: Optional[shared_accountdetails.AccountDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountDetails') }})
    app_integrity: Optional[shared_appintegrity.AppIntegrity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIntegrity') }})
    device_integrity: Optional[shared_deviceintegrity.DeviceIntegrity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIntegrity') }})
    request_details: Optional[shared_requestdetails.RequestDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestDetails') }})
    testing_details: Optional[shared_testingdetails.TestingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingDetails') }})
    
