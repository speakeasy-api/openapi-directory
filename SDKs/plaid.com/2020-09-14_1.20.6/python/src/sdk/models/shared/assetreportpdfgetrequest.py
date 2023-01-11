import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssetReportPdfGetRequest:
    r"""AssetReportPdfGetRequest
    AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
    """
    
    asset_report_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
