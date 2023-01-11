import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkreportspec as shared_networkreportspec


@dataclass_json
@dataclasses.dataclass
class GenerateNetworkReportRequest:
    r"""GenerateNetworkReportRequest
    Request to generate an AdMob Network report.
    """
    
    report_spec: Optional[shared_networkreportspec.NetworkReportSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportSpec') }})
    
