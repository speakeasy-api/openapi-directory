"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1TransactionDataAddress:
    r"""Structured address format for billing and shipping addresses."""
    
    address: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('address'), 'exclude': lambda f: f is None }})
    r"""The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number."""  
    administrative_area: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('administrativeArea'), 'exclude': lambda f: f is None }})
    r"""The state, province, or otherwise administrative area of the address."""  
    locality: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('locality'), 'exclude': lambda f: f is None }})
    r"""The town/city of the address."""  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('postalCode'), 'exclude': lambda f: f is None }})
    r"""The postal or ZIP code of the address."""  
    recipient: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('recipient'), 'exclude': lambda f: f is None }})
    r"""The recipient name, potentially including information such as \\"care of\\"."""  
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('regionCode'), 'exclude': lambda f: f is None }})
    r"""The CLDR country/region of the address."""  
    