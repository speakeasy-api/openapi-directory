"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import error as shared_error
from ..shared import link as shared_link
from ..shared import optional_link as shared_optional_link
from ..shared import pickup as shared_pickup
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetPickupsResponseBodyPaginationLink:
    r"""Helpful links to other pages of results"""
    
    first: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('first') }})
    r"""The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items."""  
    last: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last') }})
    r"""The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items."""  
    next: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next') }})
    r"""The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`."""  
    prev: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prev') }})
    r"""The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetPickupsResponseBody:
    r"""An error response body"""
    
    errors: list[shared_error.Error] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errors') }})
    r"""The errors associated with the failed API call"""  
    links: GetPickupsResponseBodyPaginationLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('links') }})
    r"""Helpful links to other pages of results"""  
    page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page') }})
    r"""Current page of the list pickups results"""  
    pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pages') }})
    r"""Total number of pages for list pickups results"""  
    pickups: list[shared_pickup.PickupOutput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pickups') }})
    r"""An array of pickups associated with the user's account."""  
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('request_id') }})
    r"""A UUID that uniquely identifies the request id.
    This can be given to the support team to help debug non-trivial issues that may occur
    """  
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total') }})
    r"""The total number of pickups returned"""  
    