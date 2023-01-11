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
class EmployeeEditRequestEmploymentEmploymentDates:
    r"""EmployeeEditRequestEmploymentEmploymentDates
    Employee employment dates
    """
    
    full_time_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_time_start') }})
    hire_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hire_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rehire: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rehire') }})
    retirement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retirement') }})
    terminated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminated') }})
    
class EmployeeEditRequestEmploymentEmploymentStatusEnum(str, Enum):
    CONTRACT = "contract"
    DISABLED = "disabled"
    FULL_TIME = "full-time"
    PART_TIME = "part-time"
    RETIRED = "retired"
    TERMINATED = "terminated"

class EmployeeEditRequestEmploymentSalaryTypeEnum(str, Enum):
    HOURLY = "hourly"
    SALARY = "salary"

class EmployeeEditRequestEmploymentSalaryUnitEnum(str, Enum):
    ANNUAL = "annual"
    HOUR = "hour"
    MONTH = "month"
    SEMI_MONTHLY = "semi-monthly"
    WEEK = "week"


@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestEmploymentSalary:
    r"""EmployeeEditRequestEmploymentSalary
    Employee salary information
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    type: Optional[EmployeeEditRequestEmploymentSalaryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit: Optional[EmployeeEditRequestEmploymentSalaryUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestEmployment:
    r"""EmployeeEditRequestEmployment
    Employment information for the employee
    """
    
    employment_dates: Optional[EmployeeEditRequestEmploymentEmploymentDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_dates') }})
    employment_status: Optional[EmployeeEditRequestEmploymentEmploymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_status') }})
    hours_worked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_worked') }})
    occupation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupation') }})
    salary: Optional[EmployeeEditRequestEmploymentSalary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salary') }})
    
class EmployeeEditRequestPersonContactEmailAddressTypeEnum(str, Enum):
    HOME = "home"
    WORK = "work"

class EmployeeEditRequestPersonContactPreferredMethodEnum(str, Enum):
    EMAIL = "email"
    HOME_PHONE = "home-phone"
    MAIL = "mail"
    OTHER = "other"
    WORK_PHONE = "work-phone"


@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestPersonContact:
    r"""EmployeeEditRequestPersonContact
    Contact information for the person
    """
    
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address') }})
    email_address_type: Optional[EmployeeEditRequestPersonContactEmailAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address_type') }})
    home_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_phone') }})
    preferred_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_language') }})
    preferred_method: Optional[EmployeeEditRequestPersonContactPreferredMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_method') }})
    speaks_english: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaks_english') }})
    work_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_phone') }})
    
class EmployeeEditRequestPersonDetailsAmericanIndianStateEnum(str, Enum):
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
class EmployeeEditRequestPersonDetailsAmericanIndian:
    r"""EmployeeEditRequestPersonDetailsAmericanIndian
    American Indian status details (if applicable)
    """
    
    state: Optional[EmployeeEditRequestPersonDetailsAmericanIndianStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tribe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tribe') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestPersonDetailsDisability:
    r"""EmployeeEditRequestPersonDetailsDisability
    Disability details (if applicable)
    """
    
    communication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communication') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class EmployeeEditRequestPersonDetailsTobaccoTypesEnum(str, Enum):
    CHEWING_TOBACCO = "chewing-tobacco"
    CIGARETTES = "cigarettes"
    PIPE = "pipe"


@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestPersonDetailsTobacco:
    r"""EmployeeEditRequestPersonDetailsTobacco
    Tobacco usage details (if applicable)
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    types: Optional[list[EmployeeEditRequestPersonDetailsTobaccoTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestPersonDetails:
    r"""EmployeeEditRequestPersonDetails
    Additional personal details of the person
    """
    
    american_indian: Optional[EmployeeEditRequestPersonDetailsAmericanIndian] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('american_indian') }})
    disability: Optional[EmployeeEditRequestPersonDetailsDisability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disability') }})
    is_military: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_military') }})
    is_student: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_student') }})
    tobacco: Optional[EmployeeEditRequestPersonDetailsTobacco] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tobacco') }})
    
class EmployeeEditRequestPersonHomeAddressStateEnum(str, Enum):
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
class EmployeeEditRequestPersonHomeAddress:
    r"""EmployeeEditRequestPersonHomeAddress
    Home address of the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: EmployeeEditRequestPersonHomeAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class EmployeeEditRequestPersonMailingAddressStateEnum(str, Enum):
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
class EmployeeEditRequestPersonMailingAddress:
    r"""EmployeeEditRequestPersonMailingAddress
    Mailing address for the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: EmployeeEditRequestPersonMailingAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class EmployeeEditRequestPersonMaritalStatusEnum(str, Enum):
    DIVORCED = "divorced"
    DOMESTIC_PARTNER = "domestic-partner"
    LEGALLY_SEPARATED = "legally-separated"
    MARRIED = "married"
    SINGLE = "single"
    WIDOWED = "widowed"

class EmployeeEditRequestPersonSexEnum(str, Enum):
    F = "F"
    M = "M"
    U = "U"
    X = "X"


@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequestPerson:
    r"""EmployeeEditRequestPerson
    Personal information for the employee
    """
    
    contact: Optional[EmployeeEditRequestPersonContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    date_of_birth: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_of_birth'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    details: Optional[EmployeeEditRequestPersonDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    home_address: Optional[EmployeeEditRequestPersonHomeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_address') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    mailing_address: Optional[EmployeeEditRequestPersonMailingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailing_address') }})
    marital_status: Optional[EmployeeEditRequestPersonMaritalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marital_status') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    sex: Optional[EmployeeEditRequestPersonSexEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sex') }})
    ssn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeEditRequest:
    employment: Optional[EmployeeEditRequestEmployment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment') }})
    person: Optional[EmployeeEditRequestPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
