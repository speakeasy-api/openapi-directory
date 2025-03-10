"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class APIKeyDatasets:
    r"""Indicates which datasets are available and added by default to the address responses"""
    
    ecad: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ecad') }})
    r"""IE Address File. Eircode Address Database"""  
    ecaf: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ecaf') }})
    r"""IE Base Address File. Eircode Address File"""  
    mr: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mr') }})
    r"""UK Multiple Residence Dataset"""  
    nyb: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nyb') }})
    r"""UK Not Yet Built Dataset"""  
    paf: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('paf') }})
    r"""UK Main Address File (Postcode Address File)"""  
    pafa: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pafa') }})
    r"""UK Property Alias dataset"""  
    pafw: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pafw') }})
    r"""UK Welsh Language Dataset"""  
    usps: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('usps') }})
    r"""US Address Dataset"""  
    herewe: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('herewe'), 'exclude': lambda f: f is None }})
    r"""Western Europe Address File"""  
    