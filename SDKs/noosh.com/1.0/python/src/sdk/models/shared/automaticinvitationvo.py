"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import teamtemplatesimplevo as shared_teamtemplatesimplevo
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AutomaticInvitationVO:
    r"""Java type: com.noosh.nooshapi.vo.AutomaticInvitationVO"""
    
    automatic_invitation_type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('automatic_invitation_type_name'), 'exclude': lambda f: f is None }})  
    team_template: Optional[shared_teamtemplatesimplevo.TeamTemplateSimpleVO] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('team_template'), 'exclude': lambda f: f is None }})
    r"""Java type: com.noosh.nooshapi.vo.TeamTemplateSimpleVO"""  
    