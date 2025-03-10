"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import applicationtransferparam as shared_applicationtransferparam
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Application:
    r"""Application resources represent applications installed on the domain that support transferring ownership of user data."""
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('etag'), 'exclude': lambda f: f is None }})
    r"""Etag of the resource."""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""The application's ID. Retrievable by using the [`applications.list()`](/admin-sdk/data-transfer/reference/rest/v1/applications/list) method."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies the resource as a DataTransfer Application Resource."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The application's name."""  
    transfer_params: Optional[list[shared_applicationtransferparam.ApplicationTransferParam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transferParams'), 'exclude': lambda f: f is None }})
    r"""The list of all possible transfer parameters for this application. These parameters select which categories of the user's data to transfer."""  
    