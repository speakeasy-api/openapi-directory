"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AllowedDomainsSettings:
    r"""Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list."""
    
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('domains'), 'exclude': lambda f: f is None }})
    r"""List of trusted domains."""  
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enable'), 'exclude': lambda f: f is None }})
    r"""Configuration for customers to opt in for the feature."""  
    