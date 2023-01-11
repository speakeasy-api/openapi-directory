import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetreportrefreshrequestoptions as shared_assetreportrefreshrequestoptions


@dataclass_json
@dataclasses.dataclass
class AssetReportRefreshRequest:
    r"""AssetReportRefreshRequest
    AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
    """
    
    asset_report_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    days_requested: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_requested') }})
    options: Optional[shared_assetreportrefreshrequestoptions.AssetReportRefreshRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
