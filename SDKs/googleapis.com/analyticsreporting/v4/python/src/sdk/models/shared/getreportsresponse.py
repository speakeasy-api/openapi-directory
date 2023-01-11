import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import report as shared_report
from ..shared import resourcequotasremaining as shared_resourcequotasremaining


@dataclass_json
@dataclasses.dataclass
class GetReportsResponse:
    r"""GetReportsResponse
    The main response class which holds the reports from the Reporting API `batchGet` call.
    """
    
    query_cost: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryCost') }})
    reports: Optional[list[shared_report.Report]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    resource_quotas_remaining: Optional[shared_resourcequotasremaining.ResourceQuotasRemaining] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceQuotasRemaining') }})
    
