"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import location as shared_location
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class JobDerivedInfoJobCategoriesEnum(str, Enum):
    JOB_CATEGORY_UNSPECIFIED = 'JOB_CATEGORY_UNSPECIFIED'
    ACCOUNTING_AND_FINANCE = 'ACCOUNTING_AND_FINANCE'
    ADMINISTRATIVE_AND_OFFICE = 'ADMINISTRATIVE_AND_OFFICE'
    ADVERTISING_AND_MARKETING = 'ADVERTISING_AND_MARKETING'
    ANIMAL_CARE = 'ANIMAL_CARE'
    ART_FASHION_AND_DESIGN = 'ART_FASHION_AND_DESIGN'
    BUSINESS_OPERATIONS = 'BUSINESS_OPERATIONS'
    CLEANING_AND_FACILITIES = 'CLEANING_AND_FACILITIES'
    COMPUTER_AND_IT = 'COMPUTER_AND_IT'
    CONSTRUCTION = 'CONSTRUCTION'
    CUSTOMER_SERVICE = 'CUSTOMER_SERVICE'
    EDUCATION = 'EDUCATION'
    ENTERTAINMENT_AND_TRAVEL = 'ENTERTAINMENT_AND_TRAVEL'
    FARMING_AND_OUTDOORS = 'FARMING_AND_OUTDOORS'
    HEALTHCARE = 'HEALTHCARE'
    HUMAN_RESOURCES = 'HUMAN_RESOURCES'
    INSTALLATION_MAINTENANCE_AND_REPAIR = 'INSTALLATION_MAINTENANCE_AND_REPAIR'
    LEGAL = 'LEGAL'
    MANAGEMENT = 'MANAGEMENT'
    MANUFACTURING_AND_WAREHOUSE = 'MANUFACTURING_AND_WAREHOUSE'
    MEDIA_COMMUNICATIONS_AND_WRITING = 'MEDIA_COMMUNICATIONS_AND_WRITING'
    OIL_GAS_AND_MINING = 'OIL_GAS_AND_MINING'
    PERSONAL_CARE_AND_SERVICES = 'PERSONAL_CARE_AND_SERVICES'
    PROTECTIVE_SERVICES = 'PROTECTIVE_SERVICES'
    REAL_ESTATE = 'REAL_ESTATE'
    RESTAURANT_AND_HOSPITALITY = 'RESTAURANT_AND_HOSPITALITY'
    SALES_AND_RETAIL = 'SALES_AND_RETAIL'
    SCIENCE_AND_ENGINEERING = 'SCIENCE_AND_ENGINEERING'
    SOCIAL_SERVICES_AND_NON_PROFIT = 'SOCIAL_SERVICES_AND_NON_PROFIT'
    SPORTS_FITNESS_AND_RECREATION = 'SPORTS_FITNESS_AND_RECREATION'
    TRANSPORTATION_AND_LOGISTICS = 'TRANSPORTATION_AND_LOGISTICS'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class JobDerivedInfo:
    r"""Derived details about the job posting."""
    
    job_categories: Optional[list[JobDerivedInfoJobCategoriesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jobCategories'), 'exclude': lambda f: f is None }})
    r"""Job categories derived from Job.title and Job.description."""  
    locations: Optional[list[shared_location.Location]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('locations'), 'exclude': lambda f: f is None }})
    r"""Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in the same order."""  
    