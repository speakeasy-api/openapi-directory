import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssetReportAuditCopyGetRequest:
    r"""AssetReportAuditCopyGetRequest
    AssetReportAuditCopyGetRequest defines the request schema for `/asset_report/audit_copy/get`
    """
    
    audit_copy_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audit_copy_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
