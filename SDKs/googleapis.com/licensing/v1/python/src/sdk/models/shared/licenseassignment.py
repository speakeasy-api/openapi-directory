"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LicenseAssignment:
    r"""Representation of a license assignment."""
    
    etags: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('etags'), 'exclude': lambda f: f is None }})
    r"""ETag of the resource."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`."""  
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('productId'), 'exclude': lambda f: f is None }})
    r"""A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs."""  
    product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('productName'), 'exclude': lambda f: f is None }})
    r"""Display Name of the product."""  
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('selfLink'), 'exclude': lambda f: f is None }})
    r"""Link to this page."""  
    sku_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('skuId'), 'exclude': lambda f: f is None }})
    r"""A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs."""  
    sku_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('skuName'), 'exclude': lambda f: f is None }})
    r"""Display Name of the sku of the product."""  
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('userId'), 'exclude': lambda f: f is None }})
    r"""The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes."""  
    