"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import accountpermissiongroup as shared_accountpermissiongroup
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AccountPermissionGroupsListResponse:
    r"""Account Permission Group List Response"""
    
    account_permission_groups: Optional[list[shared_accountpermissiongroup.AccountPermissionGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('accountPermissionGroups'), 'exclude': lambda f: f is None }})
    r"""Account permission group collection."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies what kind of resource this is. Value: the fixed string \\"dfareporting#accountPermissionGroupsListResponse\\"."""  
    