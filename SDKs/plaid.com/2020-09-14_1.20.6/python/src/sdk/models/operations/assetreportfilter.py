import dataclasses
from typing import Any,Optional
from ..shared import assetreportfilterrequest as shared_assetreportfilterrequest


@dataclasses.dataclass
class AssetReportFilterRequest:
    request: shared_assetreportfilterrequest.AssetReportFilterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_filter_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
