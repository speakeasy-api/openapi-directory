"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudretailv2interval as shared_googlecloudretailv2interval
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudRetailV2PriceInfoPriceRange:
    r"""The price range of all variant Product having the same Product.primary_product_id."""
    
    original_price: Optional[shared_googlecloudretailv2interval.GoogleCloudRetailV2Interval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('originalPrice'), 'exclude': lambda f: f is None }})
    r"""A floating point interval."""  
    price: Optional[shared_googlecloudretailv2interval.GoogleCloudRetailV2Interval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('price'), 'exclude': lambda f: f is None }})
    r"""A floating point interval."""  
    