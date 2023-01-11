import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commutefilter as shared_commutefilter
from ..shared import compensationfilter as shared_compensationfilter
from ..shared import locationfilter as shared_locationfilter
from ..shared import timestamprange as shared_timestamprange

class JobQueryEmploymentTypesEnum(str, Enum):
    EMPLOYMENT_TYPE_UNSPECIFIED = "EMPLOYMENT_TYPE_UNSPECIFIED"
    FULL_TIME = "FULL_TIME"
    PART_TIME = "PART_TIME"
    CONTRACTOR = "CONTRACTOR"
    CONTRACT_TO_HIRE = "CONTRACT_TO_HIRE"
    TEMPORARY = "TEMPORARY"
    INTERN = "INTERN"
    VOLUNTEER = "VOLUNTEER"
    PER_DIEM = "PER_DIEM"
    FLY_IN_FLY_OUT = "FLY_IN_FLY_OUT"
    OTHER_EMPLOYMENT_TYPE = "OTHER_EMPLOYMENT_TYPE"

class JobQueryJobCategoriesEnum(str, Enum):
    JOB_CATEGORY_UNSPECIFIED = "JOB_CATEGORY_UNSPECIFIED"
    ACCOUNTING_AND_FINANCE = "ACCOUNTING_AND_FINANCE"
    ADMINISTRATIVE_AND_OFFICE = "ADMINISTRATIVE_AND_OFFICE"
    ADVERTISING_AND_MARKETING = "ADVERTISING_AND_MARKETING"
    ANIMAL_CARE = "ANIMAL_CARE"
    ART_FASHION_AND_DESIGN = "ART_FASHION_AND_DESIGN"
    BUSINESS_OPERATIONS = "BUSINESS_OPERATIONS"
    CLEANING_AND_FACILITIES = "CLEANING_AND_FACILITIES"
    COMPUTER_AND_IT = "COMPUTER_AND_IT"
    CONSTRUCTION = "CONSTRUCTION"
    CUSTOMER_SERVICE = "CUSTOMER_SERVICE"
    EDUCATION = "EDUCATION"
    ENTERTAINMENT_AND_TRAVEL = "ENTERTAINMENT_AND_TRAVEL"
    FARMING_AND_OUTDOORS = "FARMING_AND_OUTDOORS"
    HEALTHCARE = "HEALTHCARE"
    HUMAN_RESOURCES = "HUMAN_RESOURCES"
    INSTALLATION_MAINTENANCE_AND_REPAIR = "INSTALLATION_MAINTENANCE_AND_REPAIR"
    LEGAL = "LEGAL"
    MANAGEMENT = "MANAGEMENT"
    MANUFACTURING_AND_WAREHOUSE = "MANUFACTURING_AND_WAREHOUSE"
    MEDIA_COMMUNICATIONS_AND_WRITING = "MEDIA_COMMUNICATIONS_AND_WRITING"
    OIL_GAS_AND_MINING = "OIL_GAS_AND_MINING"
    PERSONAL_CARE_AND_SERVICES = "PERSONAL_CARE_AND_SERVICES"
    PROTECTIVE_SERVICES = "PROTECTIVE_SERVICES"
    REAL_ESTATE = "REAL_ESTATE"
    RESTAURANT_AND_HOSPITALITY = "RESTAURANT_AND_HOSPITALITY"
    SALES_AND_RETAIL = "SALES_AND_RETAIL"
    SCIENCE_AND_ENGINEERING = "SCIENCE_AND_ENGINEERING"
    SOCIAL_SERVICES_AND_NON_PROFIT = "SOCIAL_SERVICES_AND_NON_PROFIT"
    SPORTS_FITNESS_AND_RECREATION = "SPORTS_FITNESS_AND_RECREATION"
    TRANSPORTATION_AND_LOGISTICS = "TRANSPORTATION_AND_LOGISTICS"


@dataclass_json
@dataclasses.dataclass
class JobQuery:
    r"""JobQuery
    Input only. The query required to perform a search query.
    """
    
    commute_filter: Optional[shared_commutefilter.CommuteFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commuteFilter') }})
    company_display_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyDisplayNames') }})
    company_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyNames') }})
    compensation_filter: Optional[shared_compensationfilter.CompensationFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensationFilter') }})
    custom_attribute_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributeFilter') }})
    disable_spell_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSpellCheck') }})
    employment_types: Optional[list[JobQueryEmploymentTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employmentTypes') }})
    job_categories: Optional[list[JobQueryJobCategoriesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobCategories') }})
    language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodes') }})
    location_filters: Optional[list[shared_locationfilter.LocationFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationFilters') }})
    publish_time_range: Optional[shared_timestamprange.TimestampRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTimeRange') }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    query_language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryLanguageCode') }})
    
