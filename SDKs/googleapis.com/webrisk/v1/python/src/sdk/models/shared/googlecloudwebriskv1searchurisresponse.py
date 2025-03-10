"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudwebriskv1searchurisresponsethreaturi as shared_googlecloudwebriskv1searchurisresponsethreaturi
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudWebriskV1SearchUrisResponse:
    r"""Successful response"""
    
    threat: Optional[shared_googlecloudwebriskv1searchurisresponsethreaturi.GoogleCloudWebriskV1SearchUrisResponseThreatURI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('threat'), 'exclude': lambda f: f is None }})
    r"""Contains threat information on a matching uri."""  
    