import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category
from ..shared import category as shared_category


@dataclass_json
@dataclasses.dataclass
class CategoriesInput:
    r"""CategoriesInput
    A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
    """
    
    additional_categories: Optional[list[shared_category.CategoryInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    primary_category: Optional[shared_category.CategoryInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    

@dataclass_json
@dataclasses.dataclass
class Categories:
    r"""Categories
    A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
    """
    
    additional_categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    primary_category: Optional[shared_category.Category] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    
