"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import networkaddresslist as shared_networkaddresslist
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkAdapterDetails:
    r"""Details of network adapter."""
    
    adapter_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('adapterType'), 'exclude': lambda f: f is None }})
    r"""Network adapter type (e.g. VMXNET3)."""  
    addresses: Optional[shared_networkaddresslist.NetworkAddressList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('addresses'), 'exclude': lambda f: f is None }})
    r"""List of allocated/assigned network addresses."""  
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('macAddress'), 'exclude': lambda f: f is None }})
    r"""MAC address."""  
    