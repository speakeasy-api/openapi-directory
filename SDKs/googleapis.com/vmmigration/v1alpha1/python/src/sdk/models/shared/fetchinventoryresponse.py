import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsvmsdetails as shared_awsvmsdetails
from ..shared import vmwarevmsdetails as shared_vmwarevmsdetails


@dataclass_json
@dataclasses.dataclass
class FetchInventoryResponse:
    r"""FetchInventoryResponse
    Response message for fetchInventory.
    """
    
    aws_vms: Optional[shared_awsvmsdetails.AwsVmsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsVms') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vmware_vms: Optional[shared_vmwarevmsdetails.VmwareVmsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmwareVms') }})
    
