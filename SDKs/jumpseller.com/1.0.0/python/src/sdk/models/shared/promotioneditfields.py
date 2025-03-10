"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import id as shared_id
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PromotionEditFields:
    
    begins_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('begins_at'), 'exclude': lambda f: f is None }})
    r"""Creation date of the promotion (requires 'lasts' param - 'date')"""  
    buys_at_least: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('buys_at_least'), 'exclude': lambda f: f is None }})
    r"""Controls the promotion's condition ('none', 'price', 'qty')"""  
    categories: Optional[list[shared_id.ID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('categories'), 'exclude': lambda f: f is None }})
    r"""Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories')"""  
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})
    r"""Code of the promotion"""  
    condition_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('condition_price'), 'exclude': lambda f: f is None }})
    r"""Minimum order amount to validate the promotion (requires 'buys_at_least' param - 'price')"""  
    condition_qty: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('condition_qty'), 'exclude': lambda f: f is None }})
    r"""Minimum quantity of ordered itens to validate the promotion (requires 'buys_at_least' param - 'qty')"""  
    cumulative: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cumulative'), 'exclude': lambda f: f is None }})
    r"""True if the promotion can be acumulated with others"""  
    customer_categories: Optional[list[shared_id.ID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('customer_categories'), 'exclude': lambda f: f is None }})
    r"""Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories')"""  
    customers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('customers'), 'exclude': lambda f: f is None }})
    r"""Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories', 'guests')"""  
    discount_amount_fix: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('discount_amount_fix'), 'exclude': lambda f: f is None }})
    r"""Fixed discount amount of the promotion (requires 'type' param - 'fix')"""  
    discount_amount_percent: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('discount_amount_percent'), 'exclude': lambda f: f is None }})
    r"""Percentual discount amount of the promotion (requires 'type' param - 'percentage')"""  
    discount_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('discount_target'), 'exclude': lambda f: f is None }})
    r"""Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y)"""  
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})
    r"""If the promotion is to be temporarily disabled"""  
    expires_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('expires_at'), 'exclude': lambda f: f is None }})
    r"""Expiration date of the promotion (requires 'lasts' param - 'date')"""  
    lasts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lasts'), 'exclude': lambda f: f is None }})
    r"""Controls when the promotion will expire ('none', 'date', 'max_times_used')"""  
    max_times_used: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_times_used'), 'exclude': lambda f: f is None }})
    r"""Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')"""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Name of the product"""  
    products: Optional[list[shared_id.ID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('products'), 'exclude': lambda f: f is None }})
    r"""Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y')"""  
    products_x: Optional[list[shared_id.ID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('products_x'), 'exclude': lambda f: f is None }})
    r"""Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')"""  
    quantity_x: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('quantity_x'), 'exclude': lambda f: f is None }})
    r"""Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')"""  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Controls if the discount will be a fixed area ('fix', 'percentage')"""  
    