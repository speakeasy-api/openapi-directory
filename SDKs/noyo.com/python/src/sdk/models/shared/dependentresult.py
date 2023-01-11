import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DependentResultPersonContactEmailAddressTypeEnum(str, Enum):
    HOME = "home"
    WORK = "work"

class DependentResultPersonContactPreferredMethodEnum(str, Enum):
    EMAIL = "email"
    HOME_PHONE = "home-phone"
    MAIL = "mail"
    OTHER = "other"
    WORK_PHONE = "work-phone"


@dataclass_json
@dataclasses.dataclass
class DependentResultPersonContact:
    r"""DependentResultPersonContact
    Contact information for the person
    """
    
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address') }})
    email_address_type: Optional[DependentResultPersonContactEmailAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address_type') }})
    home_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_phone') }})
    preferred_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_language') }})
    preferred_method: Optional[DependentResultPersonContactPreferredMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_method') }})
    speaks_english: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaks_english') }})
    work_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_phone') }})
    
class DependentResultPersonDetailsAmericanIndianStateEnum(str, Enum):
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
class DependentResultPersonDetailsAmericanIndian:
    r"""DependentResultPersonDetailsAmericanIndian
    American Indian status details (if applicable)
    """
    
    state: Optional[DependentResultPersonDetailsAmericanIndianStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tribe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tribe') }})
    

@dataclass_json
@dataclasses.dataclass
class DependentResultPersonDetailsDisability:
    r"""DependentResultPersonDetailsDisability
    Disability details (if applicable)
    """
    
    communication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communication') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class DependentResultPersonDetailsTobaccoTypesEnum(str, Enum):
    CHEWING_TOBACCO = "chewing-tobacco"
    CIGARETTES = "cigarettes"
    PIPE = "pipe"


@dataclass_json
@dataclasses.dataclass
class DependentResultPersonDetailsTobacco:
    r"""DependentResultPersonDetailsTobacco
    Tobacco usage details (if applicable)
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    types: Optional[list[DependentResultPersonDetailsTobaccoTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class DependentResultPersonDetails:
    r"""DependentResultPersonDetails
    Additional personal details of the person
    """
    
    american_indian: Optional[DependentResultPersonDetailsAmericanIndian] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('american_indian') }})
    disability: Optional[DependentResultPersonDetailsDisability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disability') }})
    is_military: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_military') }})
    is_student: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_student') }})
    tobacco: Optional[DependentResultPersonDetailsTobacco] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tobacco') }})
    
class DependentResultPersonHomeAddressStateEnum(str, Enum):
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
class DependentResultPersonHomeAddress:
    r"""DependentResultPersonHomeAddress
    Home address of the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: DependentResultPersonHomeAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class DependentResultPersonMailingAddressStateEnum(str, Enum):
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
class DependentResultPersonMailingAddress:
    r"""DependentResultPersonMailingAddress
    Mailing address of the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: DependentResultPersonMailingAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class DependentResultPersonMaritalStatusEnum(str, Enum):
    DIVORCED = "divorced"
    DOMESTIC_PARTNER = "domestic-partner"
    LEGALLY_SEPARATED = "legally-separated"
    MARRIED = "married"
    SINGLE = "single"
    WIDOWED = "widowed"

class DependentResultPersonSexEnum(str, Enum):
    F = "F"
    M = "M"
    U = "U"
    X = "X"


@dataclass_json
@dataclasses.dataclass
class DependentResultPerson:
    r"""DependentResultPerson
    Personal information for the dependent
    """
    
    date_of_birth: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_of_birth'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    sex: DependentResultPersonSexEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sex') }})
    contact: Optional[DependentResultPersonContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    details: Optional[DependentResultPersonDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    home_address: Optional[DependentResultPersonHomeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_address') }})
    mailing_address: Optional[DependentResultPersonMailingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailing_address') }})
    marital_status: Optional[DependentResultPersonMaritalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marital_status') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    ssn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
class DependentResultRelationshipEnum(str, Enum):
    ADOPTED_CHILD = "adopted-child"
    CHILD = "child"
    CIVIL_UNION = "civil-union"
    DOMESTIC_PARTNER = "domestic-partner"
    EX_SPOUSE = "ex-spouse"
    FOSTER_CHILD = "foster-child"
    GRANDCHILD = "grandchild"
    LEGAL_GUARDIANSHIP = "legal-guardianship"
    OTHER = "other"
    SPOUSE = "spouse"
    STEP_CHILD = "step-child"


@dataclass_json
@dataclasses.dataclass
class DependentResult:
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    employee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    person: DependentResultPerson = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    relationship: DependentResultRelationshipEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationship') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
