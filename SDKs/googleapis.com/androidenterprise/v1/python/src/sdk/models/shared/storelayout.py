"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class StoreLayoutStoreLayoutTypeEnum(str, Enum):
    r"""The store layout type. By default, this value is set to \\"basic\\" if the homepageId field is not set, and to \\"custom\\" otherwise. If set to \\"basic\\", the layout will consist of all approved apps that have been whitelisted for the user."""
    UNKNOWN = 'unknown'
    BASIC = 'basic'
    CUSTOM = 'custom'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class StoreLayout:
    r"""General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened."""
    
    homepage_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('homepageId'), 'exclude': lambda f: f is None }})
    r"""The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to \\"basic\\"."""  
    store_layout_type: Optional[StoreLayoutStoreLayoutTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('storeLayoutType'), 'exclude': lambda f: f is None }})
    r"""The store layout type. By default, this value is set to \\"basic\\" if the homepageId field is not set, and to \\"custom\\" otherwise. If set to \\"basic\\", the layout will consist of all approved apps that have been whitelisted for the user."""  
    