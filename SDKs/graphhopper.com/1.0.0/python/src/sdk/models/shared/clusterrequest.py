import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterconfiguration as shared_clusterconfiguration
from ..shared import clustercustomer as shared_clustercustomer


@dataclass_json
@dataclasses.dataclass
class ClusterRequest:
    configuration: Optional[shared_clusterconfiguration.ClusterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    customers: Optional[list[shared_clustercustomer.ClusterCustomer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    
