import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassuredworkloadsv1workloadpartnerpermissions as shared_googlecloudassuredworkloadsv1workloadpartnerpermissions


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest:
    r"""GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest
    Request of updating permission settings for a partner workload.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    partner_permissions: Optional[shared_googlecloudassuredworkloadsv1workloadpartnerpermissions.GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerPermissions') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
