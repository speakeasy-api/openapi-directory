"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import userprofile as shared_userprofile
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Guardian:
    r"""Association between a student and a guardian of that student. The guardian may receive information about the student's course work."""
    
    guardian_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guardianId'), 'exclude': lambda f: f is None }})
    r"""Identifier for the guardian."""  
    guardian_profile: Optional[shared_userprofile.UserProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guardianProfile'), 'exclude': lambda f: f is None }})
    r"""Global information for a user."""  
    invited_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('invitedEmailAddress'), 'exclude': lambda f: f is None }})
    r"""The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators."""  
    student_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('studentId'), 'exclude': lambda f: f is None }})
    r"""Identifier for the student to whom the guardian relationship applies."""  
    