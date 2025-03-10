"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SandboxOauthSelectAccountsRequest:
    r"""Defines the request schema for `sandbox/oauth/select_accounts`"""
    
    accounts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accounts') }})  
    oauth_state_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('oauth_state_id') }})  
    