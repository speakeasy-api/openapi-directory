"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SearchFoldersRequest:
    r"""The request message for searching folders."""
    
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pageSize'), 'exclude': lambda f: f is None }})
    r"""Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default."""  
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pageToken'), 'exclude': lambda f: f is None }})
    r"""Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue."""  
    query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('query'), 'exclude': lambda f: f is None }})
    r"""Search criteria used to select the Folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, lifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The displayName field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with \\"Test\\". * Query `lifecycleState=ACTIVE` returns Folder resources with `lifecycleState` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND lifecycleState=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\\\"Test String\\\\"` returns Folder resources with display names that include both \\"Test\\" and \\"String\\"."""  
    