import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyinventoryfilter as shared_ospolicyinventoryfilter
from ..shared import ospolicyresource as shared_ospolicyresource


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourceGroup:
    r"""OsPolicyResourceGroup
    Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
    """
    
    inventory_filters: Optional[list[shared_ospolicyinventoryfilter.OsPolicyInventoryFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryFilters') }})
    resources: Optional[list[shared_ospolicyresource.OsPolicyResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
