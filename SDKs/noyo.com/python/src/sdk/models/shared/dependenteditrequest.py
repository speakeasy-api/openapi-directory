import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DependentEditRequestPersonContactEmailAddressTypeEnum(str, Enum):
    HOME = "home"
    WORK = "work"

class DependentEditRequestPersonContactPreferredMethodEnum(str, Enum):
    EMAIL = "email"
    HOME_PHONE = "home-phone"
    MAIL = "mail"
    OTHER = "other"
    WORK_PHONE = "work-phone"


@dataclass_json
@dataclasses.dataclass
class DependentEditRequestPersonContact:
    r"""DependentEditRequestPersonContact
    Contact information for the person
    """
    
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address') }})
    email_address_type: Optional[DependentEditRequestPersonContactEmailAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address_type') }})
    home_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_phone') }})
    preferred_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_language') }})
    preferred_method: Optional[DependentEditRequestPersonContactPreferredMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_method') }})
    speaks_english: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaks_english') }})
    work_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_phone') }})
    
class DependentEditRequestPersonDetailsAmericanIndianStateEnum(str, Enum):
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
class DependentEditRequestPersonDetailsAmericanIndian:
    r"""DependentEditRequestPersonDetailsAmericanIndian
    American Indian status details (if applicable)
    """
    
    state: Optional[DependentEditRequestPersonDetailsAmericanIndianStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tribe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tribe') }})
    

@dataclass_json
@dataclasses.dataclass
class DependentEditRequestPersonDetailsDisability:
    r"""DependentEditRequestPersonDetailsDisability
    Disability details (if applicable)
    """
    
    communication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communication') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class DependentEditRequestPersonDetailsTobaccoTypesEnum(str, Enum):
    CHEWING_TOBACCO = "chewing-tobacco"
    CIGARETTES = "cigarettes"
    PIPE = "pipe"


@dataclass_json
@dataclasses.dataclass
class DependentEditRequestPersonDetailsTobacco:
    r"""DependentEditRequestPersonDetailsTobacco
    Tobacco usage details (if applicable)
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    types: Optional[list[DependentEditRequestPersonDetailsTobaccoTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class DependentEditRequestPersonDetails:
    r"""DependentEditRequestPersonDetails
    Additional personal details of the person
    """
    
    american_indian: Optional[DependentEditRequestPersonDetailsAmericanIndian] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('american_indian') }})
    disability: Optional[DependentEditRequestPersonDetailsDisability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disability') }})
    is_military: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_military') }})
    is_student: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_student') }})
    tobacco: Optional[DependentEditRequestPersonDetailsTobacco] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tobacco') }})
    
class DependentEditRequestPersonHomeAddressStateEnum(str, Enum):
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
class DependentEditRequestPersonHomeAddress:
    r"""DependentEditRequestPersonHomeAddress
    Home address of the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: DependentEditRequestPersonHomeAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class DependentEditRequestPersonMailingAddressStateEnum(str, Enum):
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
class DependentEditRequestPersonMailingAddress:
    r"""DependentEditRequestPersonMailingAddress
    Mailing address for the person
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state: DependentEditRequestPersonMailingAddressStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street_one: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_one') }})
    zip_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip_code') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    street_two: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_two') }})
    
class DependentEditRequestPersonMaritalStatusEnum(str, Enum):
    DIVORCED = "divorced"
    DOMESTIC_PARTNER = "domestic-partner"
    LEGALLY_SEPARATED = "legally-separated"
    MARRIED = "married"
    SINGLE = "single"
    WIDOWED = "widowed"

class DependentEditRequestPersonSexEnum(str, Enum):
    F = "F"
    M = "M"
    U = "U"
    X = "X"


@dataclass_json
@dataclasses.dataclass
class DependentEditRequestPerson:
    r"""DependentEditRequestPerson
    Personal information for the dependent
    """
    
    contact: Optional[DependentEditRequestPersonContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    date_of_birth: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_of_birth'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    details: Optional[DependentEditRequestPersonDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    home_address: Optional[DependentEditRequestPersonHomeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_address') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    mailing_address: Optional[DependentEditRequestPersonMailingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailing_address') }})
    marital_status: Optional[DependentEditRequestPersonMaritalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marital_status') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    sex: Optional[DependentEditRequestPersonSexEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sex') }})
    ssn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
class DependentEditRequestRelationshipEnum(str, Enum):
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
class DependentEditRequest:
    person: Optional[DependentEditRequestPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    relationship: Optional[DependentEditRequestRelationshipEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationship') }})
    
