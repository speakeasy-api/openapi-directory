"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import inappproduct as shared_inappproduct
from ..shared import pageinfo as shared_pageinfo
from ..shared import tokenpagination as shared_tokenpagination
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InappproductsListResponse:
    r"""Response listing all in-app products."""
    
    inappproduct: Optional[list[shared_inappproduct.InAppProduct]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('inappproduct'), 'exclude': lambda f: f is None }})
    r"""All in-app products."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""The kind of this response (\\"androidpublisher#inappproductsListResponse\\")."""  
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pageInfo'), 'exclude': lambda f: f is None }})
    r"""Information about the current page. List operations that supports paging return only one \\"page\\" of results. This protocol buffer message describes the page that has been returned."""  
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tokenPagination'), 'exclude': lambda f: f is None }})
    r"""Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one \\"page\\" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page."""  
    