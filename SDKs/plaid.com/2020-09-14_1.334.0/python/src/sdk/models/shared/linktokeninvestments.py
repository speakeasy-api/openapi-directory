"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LinkTokenInvestments:
    r"""Configuration parameters for the Investments product"""
    
    allow_unverified_crypto_wallets: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_unverified_crypto_wallets'), 'exclude': lambda f: f is None }})
    r"""If `true`, allow self-custody crypto wallets to be added without requiring signature verification. Defaults to `false`."""  
    