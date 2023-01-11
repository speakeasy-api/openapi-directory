import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ancillary_service_endorsement_enum as shared_ancillary_service_endorsement_enum


@dataclass_json
@dataclasses.dataclass
class ConnectDhlEcommerceRequestBody:
    r"""ConnectDhlEcommerceRequestBody
    A DHL Ecommerce account information request body
    """
    
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    distribution_center: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution_center') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    pickup_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_number') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    ancillary_endorsement: Optional[shared_ancillary_service_endorsement_enum.AncillaryServiceEndorsementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancillary_endorsement') }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    api_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_secret') }})
    ftp_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_password') }})
    ftp_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_username') }})
    
