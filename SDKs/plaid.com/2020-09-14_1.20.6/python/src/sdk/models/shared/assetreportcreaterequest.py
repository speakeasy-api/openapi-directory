import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetreportcreaterequestoptions as shared_assetreportcreaterequestoptions


@dataclass_json
@dataclasses.dataclass
class AssetReportCreateRequest:
    r"""AssetReportCreateRequest
    AssetReportCreateRequest defines the request schema for `/asset_report/create`
    """
    
    access_tokens: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_tokens') }})
    days_requested: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_requested') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_assetreportcreaterequestoptions.AssetReportCreateRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
