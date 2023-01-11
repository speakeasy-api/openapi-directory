import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediationreportspec as shared_mediationreportspec


@dataclass_json
@dataclasses.dataclass
class GenerateMediationReportRequest:
    r"""GenerateMediationReportRequest
    Request to generate an AdMob mediation report.
    """
    
    report_spec: Optional[shared_mediationreportspec.MediationReportSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportSpec') }})
    
