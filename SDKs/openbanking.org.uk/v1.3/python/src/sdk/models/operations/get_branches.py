import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetBranchesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    
class GetBranches400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetBranches400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetBranches400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclasses.dataclass
class GetBranches400ErrorObject:
    description: GetBranches400ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches400ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches400ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetBranches408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetBranches408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclasses.dataclass
class GetBranches408ErrorObject:
    description: GetBranches408ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches408ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches408ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetBranches429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetBranches429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclasses.dataclass
class GetBranches429ErrorObject:
    description: GetBranches429ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches429ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches429ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetBranches500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetBranches500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class GetBranches500ErrorObject:
    description: GetBranches500ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches500ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches500ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetBranches503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetBranches503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class GetBranches503ErrorObject:
    description: GetBranches503ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches503ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches503ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranchesErrorObject:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum(str, Enum):
    AUDIO_CASH_MACHINE = "AudioCashMachine"
    AUTOMATIC_DOORS = "AutomaticDoors"
    CHAIR_ACCESS = "ChairAccess"
    DRIVE_THRU = "DriveThru"
    EXTERNAL_RAMP = "ExternalRamp"
    INDUCTION_LOOP = "InductionLoop"
    INTERNAL_RAMP = "InternalRamp"
    LEVEL_ACCESS = "LevelAccess"
    LOWER_LEVEL_COUNTER = "LowerLevelCounter"
    WHEELCHAIR_ACCESS = "WheelchairAccess"


@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress
    Postal Address
    """
    
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    building_number_or_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildingNumberOrName') }})
    country_sub_division: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountrySubDivision') }})
    optional_address_field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionalAddressField') }})
    post_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostCode') }})
    street_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    town_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TownName') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone
    Alternative Phone Number
    """
    
    alternate_telephone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlternateTelephoneNumber') }})
    alternate_telephone_number_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlternateTelephoneNumberDescription') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum(str, Enum):
    BUSINESS_IT_SUPPORT = "BusinessITSupport"
    COLLECTION_LOCKERS = "CollectionLockers"
    MEETING_ROOMS = "MeetingRooms"
    PARKING = "Parking"
    WIFI = "Wifi"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum(str, Enum):
    BUREAU_DE_CHANGE = "BureauDeChange"
    BUSINESS_COUNTER = "BusinessCounter"
    CARD_ISSUANCE_FACILITY = "CardIssuanceFacility"
    COUNTER_SERVICES = "CounterServices"
    DRIVE_THRU = "DriveThru"
    MORTGAGE_ADVISOR = "MortgageAdvisor"
    NIGHT_SAFE = "NightSafe"
    ON_DEMAND_CURRENCY = "OnDemandCurrency"
    PREMIER_COUNTER = "PremierCounter"
    VIDEO_BANKING = "VideoBanking"
    WHEEL_CHAIR_ACCESS = "WheelChairAccess"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum(str, Enum):
    ACCOUNT_VERIFICATION_SERVICE = "AccountVerificationService"
    ASSISTED_SERVICE_COUNTER = "AssistedServiceCounter"
    BUSINESS_DEPOSIT_TERMINAL = "BusinessDepositTerminal"
    CASH_CHEQUE_DEPOSIT_MACHINE_COIN = "CashChequeDepositMachineCoin"
    CASH_CHEQUE_DEPOSIT_MACHINE_NO_COIN = "CashChequeDepositMachineNoCoin"
    EXTERNAL_ATM_AUDIO = "ExternalAtmAudio"
    EXTERNAL_ATM_NO_AUDIO = "ExternalAtmNoAudio"
    EXTERNAL_QUICK_SERVICE_POINT = "ExternalQuickServicePoint"
    INTERNAL_ATM_AUDIO = "InternalAtmAudio"
    INTERNAL_ATM_NO_AUDIO = "InternalAtmNoAudio"
    INTERNAL_QUICK_SERVICE_POINT = "InternalQuickServicePoint"
    LODGEMENT_DEVICE = "LodgementDevice"
    ONLINE_BANKING_POINT = "OnlineBankingPoint"
    QUICK_DEPOSIT = "QuickDeposit"
    SATURDAY_COUNTER_SERVICE = "SaturdayCounterService"
    SELF_SERVICE_ACCOUNT_OPENING = "SelfServiceAccountOpening"
    STATEMENT_PRINTER = "StatementPrinter"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum(str, Enum):
    PHYSICAL = "Physical"
    MOBILE = "Mobile"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum(str, Enum):
    BUSINESS = "Business"
    CORPORATE = "Corporate"
    PERSONAL = "Personal"
    PREMIER = "Premier"
    PRIVATE = "Private"
    SELECT = "Select"
    SME = "SME"
    WEALTH = "Wealth"


@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation
    Geographic Coordinates
    """
    
    latitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latitude') }})
    longitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Longitude') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum(str, Enum):
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"
    PUBLIC_AND_BANK_HOLIDAY = "Public and Bank Holiday"


@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes:
    closing_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClosingTime') }})
    opening_day: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDay') }})
    opening_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningTime') }})
    unavailable_finish_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnavailableFinishTime') }})
    unavailable_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnavailableStartTime') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand
    Brand
    """
    
    trademark_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkID') }})
    trademark_ipo_code: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkIPOCode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName
    Organisation Name
    """
    
    legal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LegalName') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation
    Parent organisation
    """
    
    organisation_name: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganisationName') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BIC') }})
    lei: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LEI') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation
    Organisation
    """
    
    brand: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Brand') }})
    parent_organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentOrganisation') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure
    Planned branch closure
    """
    
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch:
    atm_at_branch: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ATMAtBranch') }})
    address: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    branch_identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchIdentification') }})
    branch_type: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchType') }})
    customer_segment: list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerSegment') }})
    opening_times: list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningTimes') }})
    organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organisation') }})
    telephone_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TelephoneNumber') }})
    accessibility_types: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessibilityTypes') }})
    alternate_phone: Optional[list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlternatePhone') }})
    arrival_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrivalTime') }})
    branch_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchDescription') }})
    branch_facilities_name: Optional[list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchFacilitiesName') }})
    branch_mediated_service_name: Optional[list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchMediatedServiceName') }})
    branch_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchName') }})
    branch_other_facilities: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchOtherFacilities') }})
    branch_other_mediated_services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchOtherMediatedServices') }})
    branch_other_self_services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchOtherSelfServices') }})
    branch_photo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchPhoto') }})
    branch_self_serve_service_name: Optional[list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchSelfServeServiceName') }})
    days_of_the_week: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DaysOfTheWeek') }})
    departure_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepartureTime') }})
    fax_number: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaxNumber') }})
    geographic_location: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeographicLocation') }})
    parking_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParkingLocation') }})
    planned_branch_closure: Optional[list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlannedBranchClosure') }})
    stop_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopName') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agreement') }})
    last_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('License') }})
    terms_of_use: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TermsOfUse') }})
    total_results: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResults') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: list[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetBranchesRequest:
    headers: GetBranchesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetBranchesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error_object: Optional[GetBranches400ErrorObject] = dataclasses.field(default=None)
    four_hundred_and_eight_error_object: Optional[GetBranches408ErrorObject] = dataclasses.field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetBranches429ErrorObject] = dataclasses.field(default=None)
    five_hundred_error_object: Optional[GetBranches500ErrorObject] = dataclasses.field(default=None)
    five_hundred_and_three_error_object: Optional[GetBranches503ErrorObject] = dataclasses.field(default=None)
    error_object: Optional[GetBranchesErrorObject] = dataclasses.field(default=None)
    get_branches_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON] = dataclasses.field(default=None)
    
