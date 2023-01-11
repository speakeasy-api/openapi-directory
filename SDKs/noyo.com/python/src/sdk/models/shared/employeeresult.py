import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EmployeeResultEmploymentEmploymentDates:
    r"""EmployeeResultEmploymentEmploymentDates
    Employee employment dates
    """
    
    full_time_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_time_start') }})
    hire_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hire_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rehire: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rehire') }})
    retirement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retirement') }})
    terminated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminated') }})
    
class EmployeeResultEmploymentEmploymentStatusEnum(str, Enum):
    CONTRACT = "contract"
    DISABLED = "disabled"
    FULL_TIME = "full-time"
    PART_TIME = "part-time"
    RETIRED = "retired"
    TERMINATED = "terminated"

class EmployeeResultEmploymentSalaryTypeEnum(str, Enum):
    HOURLY = "hourly"
    SALARY = "salary"

class EmployeeResultEmploymentSalaryUnitEnum(str, Enum):
    ANNUAL = "annual"
    HOUR = "hour"
    MONTH = "month"
    SEMI_MONTHLY = "semi-monthly"
    WEEK = "week"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultEmploymentSalary:
    r"""EmployeeResultEmploymentSalary
    Employee salary information
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    type: Optional[EmployeeResultEmploymentSalaryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit: Optional[EmployeeResultEmploymentSalaryUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeResultEmployment:
    r"""EmployeeResultEmployment
    Employment information for the employee
    """
    
    employment_dates: Optional[EmployeeResultEmploymentEmploymentDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_dates') }})
    employment_status: Optional[EmployeeResultEmploymentEmploymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_status') }})
    hours_worked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_worked') }})
    occupation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupation') }})
    salary: Optional[EmployeeResultEmploymentSalary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salary') }})
    
class EmployeeResultPersonContactEmailAddressTypeEnum(str, Enum):
    HOME = "home"
    WORK = "work"

class EmployeeResultPersonContactPreferredMethodEnum(str, Enum):
    EMAIL = "email"
    HOME_PHONE = "home-phone"
    MAIL = "mail"
    OTHER = "other"
    WORK_PHONE = "work-phone"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonContact:
    r"""EmployeeResultPersonContact
    Contact information for the person
    """
    
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address') }})
    email_address_type: Optional[EmployeeResultPersonContactEmailAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address_type') }})
    home_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_phone') }})
    preferred_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_language') }})
    preferred_method: Optional[EmployeeResultPersonContactPreferredMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_method') }})
    speaks_english: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaks_english') }})
    work_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_phone') }})
    
class EmployeeResultPersonDetailsAmericanIndianStateEnum(str, Enum):
    AK = "AK"
    AL = "AL"
    AR = "AR"
    AS = "AS"
    AZ = "AZ"
    CA = "CA"
    CO = "CO"
    CT = "CT"
    DC = "DC"
    DE = "DE"
    FL = "FL"
    FM = "FM"
    GA = "GA"
    GU = "GU"
    HI = "HI"
    IA = "IA"
    ID = "ID"
    IL = "IL"
    IN = "IN"
    KS = "KS"
    KY = "KY"
    LA = "LA"
    MA = "MA"
    MD = "MD"
    ME = "ME"
    MH = "MH"
    MI = "MI"
    MN = "MN"
    MO = "MO"
    MP = "MP"
    MS = "MS"
    MT = "MT"
    NC = "NC"
    ND = "ND"
    NE = "NE"
    NH = "NH"
    NJ = "NJ"
    NM = "NM"
    NV = "NV"
    NY = "NY"
    OH = "OH"
    OK = "OK"
    OR = "OR"
    PA = "PA"
    PR = "PR"
    PW = "PW"
    RI = "RI"
    SC = "SC"
    SD = "SD"
    TN = "TN"
    TX = "TX"
    UM = "UM"
    UT = "UT"
    VA = "VA"
    VI = "VI"
    VT = "VT"
    WA = "WA"
    WI = "WI"
    WV = "WV"
    WY = "WY"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonDetailsAmericanIndian:
    r"""EmployeeResultPersonDetailsAmericanIndian
    American Indian status details (if applicable)
    """
    
    state: Optional[EmployeeResultPersonDetailsAmericanIndianStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tribe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tribe') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonDetailsDisability:
    r"""EmployeeResultPersonDetailsDisability
    Disability details (if applicable)
    """
    
    communication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communication') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class EmployeeResultPersonDetailsTobaccoTypesEnum(str, Enum):
    CHEWING_TOBACCO = "chewing-tobacco"
    CIGARETTES = "cigarettes"
    PIPE = "pipe"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonDetailsTobacco:
    r"""EmployeeResultPersonDetailsTobacco
    Tobacco usage details (if applicable)
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    types: Optional[list[EmployeeResultPersonDetailsTobaccoTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonDetails:
    r"""EmployeeResultPersonDetails
    Additional personal details of the person
    """
    
    american_indian: Optional[EmployeeResultPersonDetailsAmericanIndian] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('american_indian') }})
    disability: Optional[EmployeeResultPersonDetailsDisability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disability') }})
    is_military: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_military') }})
    is_student: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_student') }})
    tobacco: Optional[EmployeeResultPersonDetailsTobacco] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tobacco') }})
    
class EmployeeResultPersonHomeAddressStateEnum(str, Enum):
    AK = "AK"
    AL = "AL"
    AR = "AR"
    AS = "AS"
    AZ = "AZ"
    CA = "CA"
    CO = "CO"
    CT = "CT"
    DC = "DC"
    DE = "DE"
    FL = "FL"
    FM = "FM"
    GA = "GA"
    GU = "GU"
    HI = "HI"
    IA = "IA"
    ID = "ID"
    IL = "IL"
    IN = "IN"
    KS = "KS"
    KY = "KY"
    LA = "LA"
    MA = "MA"
    MD = "MD"
    ME = "ME"
    MH = "MH"
    MI = "MI"
    MN = "MN"
    MO = "MO"
    MP = "MP"
    MS = "MS"
    MT = "MT"
    NC = "NC"
    ND = "ND"
    NE = "NE"
    NH = "NH"
    NJ = "NJ"
    NM = "NM"
    NV = "NV"
    NY = "NY"
    OH = "OH"
    OK = "OK"
    OR = "OR"
    PA = "PA"
    PR = "PR"
    PW = "PW"
    RI = "RI"
    SC = "SC"
    SD = "SD"
    TN = "TN"
    TX = "TX"
    UM = "UM"
    UT = "UT"
    VA = "VA"
    VI = "VI"
    VT = "VT"
    WA = "WA"
    WI = "WI"
    WV = "WV"
    WY = "WY"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonHomeAddress:
    r"""EmployeeResultPersonHomeAddress
    Home address of the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: EmployeeResultPersonHomeAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class EmployeeResultPersonMailingAddressStateEnum(str, Enum):
    AK = "AK"
    AL = "AL"
    AR = "AR"
    AS = "AS"
    AZ = "AZ"
    CA = "CA"
    CO = "CO"
    CT = "CT"
    DC = "DC"
    DE = "DE"
    FL = "FL"
    FM = "FM"
    GA = "GA"
    GU = "GU"
    HI = "HI"
    IA = "IA"
    ID = "ID"
    IL = "IL"
    IN = "IN"
    KS = "KS"
    KY = "KY"
    LA = "LA"
    MA = "MA"
    MD = "MD"
    ME = "ME"
    MH = "MH"
    MI = "MI"
    MN = "MN"
    MO = "MO"
    MP = "MP"
    MS = "MS"
    MT = "MT"
    NC = "NC"
    ND = "ND"
    NE = "NE"
    NH = "NH"
    NJ = "NJ"
    NM = "NM"
    NV = "NV"
    NY = "NY"
    OH = "OH"
    OK = "OK"
    OR = "OR"
    PA = "PA"
    PR = "PR"
    PW = "PW"
    RI = "RI"
    SC = "SC"
    SD = "SD"
    TN = "TN"
    TX = "TX"
    UM = "UM"
    UT = "UT"
    VA = "VA"
    VI = "VI"
    VT = "VT"
    WA = "WA"
    WI = "WI"
    WV = "WV"
    WY = "WY"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultPersonMailingAddress:
    r"""EmployeeResultPersonMailingAddress
    Mailing address of the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: EmployeeResultPersonMailingAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class EmployeeResultPersonMaritalStatusEnum(str, Enum):
    DIVORCED = "divorced"
    DOMESTIC_PARTNER = "domestic-partner"
    LEGALLY_SEPARATED = "legally-separated"
    MARRIED = "married"
    SINGLE = "single"
    WIDOWED = "widowed"

class EmployeeResultPersonSexEnum(str, Enum):
    F = "F"
    M = "M"
    U = "U"
    X = "X"


@dataclass_json
@dataclasses.dataclass
class EmployeeResultPerson:
    r"""EmployeeResultPerson
    Personal information for the employee
    """
    
    date_of_birth: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_of_birth'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    sex: EmployeeResultPersonSexEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sex') }})
    contact: Optional[EmployeeResultPersonContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    details: Optional[EmployeeResultPersonDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    home_address: Optional[EmployeeResultPersonHomeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_address') }})
    mailing_address: Optional[EmployeeResultPersonMailingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailing_address') }})
    marital_status: Optional[EmployeeResultPersonMaritalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marital_status') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    ssn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeResult:
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    employment: EmployeeResultEmployment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    person: EmployeeResultPerson = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
