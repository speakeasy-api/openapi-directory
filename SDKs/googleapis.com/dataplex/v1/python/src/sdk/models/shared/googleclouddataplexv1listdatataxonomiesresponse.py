"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleclouddataplexv1datataxonomy as shared_googleclouddataplexv1datataxonomy
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDataplexV1ListDataTaxonomiesResponse:
    r"""List DataTaxonomies response."""
    
    data_taxonomies: Optional[list[shared_googleclouddataplexv1datataxonomy.GoogleCloudDataplexV1DataTaxonomy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dataTaxonomies'), 'exclude': lambda f: f is None }})
    r"""DataTaxonomies under the given parent location."""  
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})
    r"""Token to retrieve the next page of results, or empty if there are no more results in the list."""  
    unreachable_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unreachableLocations'), 'exclude': lambda f: f is None }})
    r"""Locations that could not be reached."""  
    