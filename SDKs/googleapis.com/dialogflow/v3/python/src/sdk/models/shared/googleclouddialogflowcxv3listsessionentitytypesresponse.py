"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleclouddialogflowcxv3sessionentitytype as shared_googleclouddialogflowcxv3sessionentitytype
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse:
    r"""The response message for SessionEntityTypes.ListSessionEntityTypes."""
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})
    r"""Token to retrieve the next page of results, or empty if there are no more results in the list."""  
    session_entity_types: Optional[list[shared_googleclouddialogflowcxv3sessionentitytype.GoogleCloudDialogflowCxV3SessionEntityType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sessionEntityTypes'), 'exclude': lambda f: f is None }})
    r"""The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request."""  
    