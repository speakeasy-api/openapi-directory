import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import packagedata as shared_packagedata


@dataclass_json
@dataclasses.dataclass
class AnalyzePackagesRequestV1:
    r"""AnalyzePackagesRequestV1
    AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
    """
    
    include_osv_data: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOsvData') }})
    packages: Optional[list[shared_packagedata.PackageData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    resource_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    
