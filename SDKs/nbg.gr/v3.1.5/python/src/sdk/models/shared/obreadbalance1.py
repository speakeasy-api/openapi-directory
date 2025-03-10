"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import links as shared_links
from ..shared import meta as shared_meta
from ..shared import obreaddatabalance1 as shared_obreaddatabalance1
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OBReadBalance1:
    r"""Balances Read"""
    
    data: shared_obreaddatabalance1.OBReadDataBalance1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Data') }})  
    links: shared_links.Links = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Links') }})
    r"""Links relevant to the payload"""  
    meta: shared_meta.Meta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Meta') }})
    r"""Meta Data relevant to the payload"""  
    