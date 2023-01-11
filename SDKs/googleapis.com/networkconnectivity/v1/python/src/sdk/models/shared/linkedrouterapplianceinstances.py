import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routerapplianceinstance as shared_routerapplianceinstance


@dataclass_json
@dataclasses.dataclass
class LinkedRouterApplianceInstances:
    r"""LinkedRouterApplianceInstances
    A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
    """
    
    instances: Optional[list[shared_routerapplianceinstance.RouterApplianceInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    site_to_site_data_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    vpc_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    

@dataclass_json
@dataclasses.dataclass
class LinkedRouterApplianceInstancesInput:
    r"""LinkedRouterApplianceInstancesInput
    A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
    """
    
    instances: Optional[list[shared_routerapplianceinstance.RouterApplianceInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    site_to_site_data_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    
