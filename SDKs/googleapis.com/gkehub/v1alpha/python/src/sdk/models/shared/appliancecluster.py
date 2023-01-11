import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApplianceCluster:
    r"""ApplianceCluster
    ApplianceCluster contains information specific to GDC Edge Appliance Clusters.
    """
    
    resource_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLink') }})
    
