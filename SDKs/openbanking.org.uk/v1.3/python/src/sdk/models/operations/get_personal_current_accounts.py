import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetPersonalCurrentAccountsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    
class GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetPersonalCurrentAccounts400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetPersonalCurrentAccounts400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts400ErrorObject:
    description: GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetPersonalCurrentAccounts400ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetPersonalCurrentAccounts400ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetPersonalCurrentAccounts408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetPersonalCurrentAccounts408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts408ErrorObject:
    description: GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetPersonalCurrentAccounts408ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetPersonalCurrentAccounts408ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetPersonalCurrentAccounts429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetPersonalCurrentAccounts429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts429ErrorObject:
    description: GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetPersonalCurrentAccounts429ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetPersonalCurrentAccounts429ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetPersonalCurrentAccounts500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetPersonalCurrentAccounts500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts500ErrorObject:
    description: GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetPersonalCurrentAccounts500ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetPersonalCurrentAccounts500ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetPersonalCurrentAccounts503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetPersonalCurrentAccounts503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts503ErrorObject:
    description: GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetPersonalCurrentAccounts503ErrorObjectStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetPersonalCurrentAccounts503ErrorObjectTitleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccountsErrorObject:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum(str, Enum):
    ATM = "ATM"
    BRANCH = "Branch"
    BUSINESS_COMMERCIAL_CENTRE = "BusinessCommercialCentre"
    CALL_CENTRE = "CallCentre"
    MOBILE_APPS = "MobileApps"
    MOBILE_BANKING = "MobileBanking"
    ONLINE = "Online"
    PHONE = "Phone"
    POST = "Post"
    POST_OFFICE = "PostOffice"
    RELATIONSHIP_MANAGER = "RelationshipManager"
    TEXT = "Text"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum(str, Enum):
    CASH_DEPOSIT = "CashDeposit"
    DEPOSIT = "Deposit"
    DIRECT_DEBIT = "DirectDebit"
    INITIAL_DEPOSIT = "InitialDeposit"
    INTERNET_LOGON = "InternetLogon"
    MOBILE_LOGON = "MobileLogon"
    REGULAR_DEPOSIT = "RegularDeposit"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail
    Benefit detail
    """
    
    benefit_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitDescription') }})
    benefit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitID') }})
    benefit_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitName') }})
    benefit_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitType') }})
    benefit_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitValue') }})
    counter: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Counter') }})
    criteria_type: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CriteriaType') }})
    default_to_accounts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultToAccounts') }})
    maximum_criteria: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumCriteria') }})
    minimum_criteria: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumCriteria') }})
    promotion_end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PromotionEndDate') }})
    promotion_start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PromotionStartDate') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem
    Benefit Item
    """
    
    benefit_detail: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitDetail') }})
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup
    Benefit Interest Group
    """
    
    benefit_item: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitItem') }})
    benefit_sub_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitSubType') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits
    Benefit
    """
    
    benefit: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benefit') }})
    benefit_group: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitGroup') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingCaPricingItem:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingCaPricingItem
    Card Pricing
    """
    
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    exchange_rate_adjustment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateAdjustment') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricing:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricing
    Card Price
    """
    
    ca_pricing_item: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingCaPricingItem = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAPricingItem') }})
    product_state: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductState') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum(str, Enum):
    BASIC_CARD = "BasicCard"
    BUSINESS_QUICK_LODGE_CARD = "BusinessQuickLodgeCard"
    CASHCARD = "Cashcard"
    CONTACTLESS_CASHCARD = "ContactlessCashcard"
    CONTACTLESS_DEBIT_MASTERCARD = "ContactlessDebitMastercard"
    CONTACTLESS_DEBIT_VISA = "ContactlessDebitVisa"
    DEBIT_MASTERCARD = "DebitMastercard"
    VISA_DEBIT = "VisaDebit"
    DEPOSIT_CARD = "DepositCard"
    OPERATOR_CARD = "OperatorCard"
    POCA_CARD = "POCACard"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum(str, Enum):
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum(str, Enum):
    FIXED = "Fixed"
    VARIABLE = "Variable"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum(str, Enum):
    APR = "APR"
    AER = "AER"
    GROSS = "Gross"
    NET = "Net"
    REP_APR = "RepApr"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
    Credit Interest Tiers
    """
    
    apraer_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APRAERRate') }})
    daily_charge_for_maximum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyChargeForMaximum') }})
    daily_charge_for_minimum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyChargeForMinimum') }})
    interest_tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestTier') }})
    rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    rate_comparison_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateComparisonType') }})
    tier_value_maximum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    tier_value_minimum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum(str, Enum):
    COMPOUND = "Compound"
    PAY_AWAY = "PayAway"
    SELF_CREDIT = "SelfCredit"
    SIMPLE_INTEREST = "SimpleInterest"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItem:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItem
    Credit Interest item
    """
    
    calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    calculation_method: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationMethod') }})
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    fixed_interest_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedInterestLength') }})
    interest_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestNotes') }})
    interest_rate_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestRateType') }})
    interest_tiers: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestTiers') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    payment_method: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethod') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroup:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroup
    Credit Interest Group
    """
    
    credit_interest_item: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItem = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterestItem') }})
    interest_tier_sub_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestTierSubType') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterest:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterest
    Credit Interest
    """
    
    credit_charged: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCharged') }})
    credit_interest_group: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterestGroup') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum(str, Enum):
    HARD = "Hard"
    SOFT = "Soft"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum(str, Enum):
    HARD = "Hard"
    SOFT = "Soft"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum(str, Enum):
    ANY_BUSINESS_CUSTOMER = "AnyBusinessCustomer"
    BUSINESS_ONLY = "BusinessOnly"
    CREDIT_CARD = "CreditCard"
    CREDIT_SCORING = "CreditScoring"
    EMAIL_ADDRESS = "EmailAddress"
    EXISTING_CUSTOMERS = "ExistingCustomers"
    ID_AND_V = "IdAndV"
    MORTGAGE = "Mortgage"
    NO_ARREARS_ON_LOAN = "NoArrearsOnLoan"
    NO_CUSTOMER_IN_ARREARS = "NoCustomerInArrears"
    NO_OVER_OVERDRAFT_THIRTY_DAYS = "NoOverOverdraftThirtyDays"
    NO_SOLE_UK_ACCOUNT_OR_BANKRUPT = "NoSoleUkAccountOrBankrupt"
    NTB = "NTB"
    NTB_BUSINESS = "NTBBusiness"
    SOLE_STUDENT_ACCOUNT = "SoleStudentAccount"
    SOLE_UK_ACCOUNT = "SoleUkAccount"
    STUDENTS_ONLY = "StudentsOnly"
    TWO_MONTHS_OF_COURSE_START = "TwoMonthsOfCourseStart"
    UCAS_FULLTIME_TWO_YEARS = "UCASFulltimeTwoYears"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum(str, Enum):
    EXISTING_CUSTOMERS = "ExistingCustomers"
    NEW_CUSTOMERS_ONLY = "NewCustomersOnly"
    SWITCHERS_ONLY = "SwitchersOnly"
    START_UP = "StartUp"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum(str, Enum):
    UK = "UK"
    EEA = "EEA"
    EU = "EU"
    EFTA = "EFTA"
    GB_ENG = "GB - ENG"
    GB_NIR = "GB - NIR"
    GB_SCT = "GB - SCT"
    GB_WLS = "GB - WLS"
    IRL = "IRL"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum(str, Enum):
    JOINT = "Joint"
    SOLE_INCOME = "SoleIncome"
    SOLE_OR_JOINT = "SoleOrJoint"
    TURNOVER = "Turnover"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility
    Eligibility
    """
    
    age_restricted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgeRestricted') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    income_turnover_related: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomeTurnoverRelated') }})
    other_financial_holding_required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFinancialHoldingRequired') }})
    previous_bankruptcy: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousBankruptcy') }})
    residency_restricted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResidencyRestricted') }})
    third_sector_organisations: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThirdSectorOrganisations') }})
    annual_business_turnover: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualBusinessTurnover') }})
    annual_business_turnover_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualBusinessTurnoverCurrency') }})
    eligibility_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibilityName') }})
    eligibility_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibilityNotes') }})
    eligibility_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibilityType') }})
    income_condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomeCondition') }})
    marketing_eligibility: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarketingEligibility') }})
    max_number_of_accounts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxNumberOfAccounts') }})
    maximum_age: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAge') }})
    maximum_age_to_open: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAgeToOpen') }})
    maximum_opening_amount: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumOpeningAmount') }})
    min_income_turnover_paid_into_account: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinIncomeTurnoverPaidIntoAccount') }})
    minimum_age: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumAge') }})
    minimum_deposit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumDeposit') }})
    minimum_income_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumIncomeFrequency') }})
    minimum_income_turnover_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumIncomeTurnoverAmount') }})
    minimum_income_turnover_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumIncomeTurnoverCurrency') }})
    minimum_operating_balance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumOperatingBalance') }})
    minimum_operating_balance_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumOperatingBalanceCurrency') }})
    minimum_operating_balance_exists: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumOperatingBalanceExists') }})
    opening_deposit_maximum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMaximumAmount') }})
    opening_deposit_maximum_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMaximumCurrency') }})
    opening_deposit_minimum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMinimum') }})
    opening_deposit_minimum_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMinimumCurrency') }})
    residency_restricted_region: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResidencyRestrictedRegion') }})
    single_joint_income: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleJointIncome') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetails:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetails
    Feature Details
    """
    
    criteria_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CriteriaType') }})
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    feature_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDescription') }})
    feature_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureName') }})
    feature_sub_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureSubType') }})
    feature_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureType') }})
    feature_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureValue') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeature:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeature
    Account Features
    """
    
    existing_feature: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExistingFeature') }})
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    feature_details: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDetails') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    product_state: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductState') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    AT_TIME_OF_LOAN_REPAYMENT = "AtTimeOfLoanRepayment"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    EVERY_FIVE_BUSINESS_DAYS = "EveryFiveBusinessDays"
    ITEM = "Item"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    START_OF_LOAN = "StartOfLoan"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
    Fee Sub Details
    """
    
    fee_frequency: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeFrequency') }})
    negotiable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negotiable') }})
    fee_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_higher_tier: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeHigherTier') }})
    fee_lower_tier: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeLowerTier') }})
    fee_max: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeMax') }})
    fee_min: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeMin') }})
    fee_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fees_and_charges_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndChargesNotes') }})
    representative_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepresentativeRate') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum(str, Enum):
    OTHER = "Other"
    ATM_DONATION = "ATMDonation"
    ATM_DEPOS_ATM_PAID_IN = "ATMDeposATMPaidIn"
    REPORT_CERT_BALANCE = "ReportCertBalance"
    ATM_ABROAD_CON_VISA_CREDIT = "ATMAbroadConVisaCredit"
    ATM_ABROAD_CON_VISA_DEBIT = "ATMAbroadConVisaDebit"
    ATM_CARDNET_ENV_IN = "ATMCardnetEnvIn"
    ATM_CASH_GROUP_ATM_CREDIT_CARD = "ATMCashGroupATMCreditCard"
    ATM_CASH_NON_GROUP_ATM_CREDITTCARD = "ATMCashNonGroupATMCredittcard"
    ATM_CASH_GROUP_ATM_DEBIT_CARD = "ATMCashGroupATMDebitCard"
    ATM_CASH_NON_GROUP_ATM_DEBITCARD = "ATMCashNonGroupATMDebitcard"
    ATM_CON_GROUP_ATM = "ATMConGroupATM"
    ATM_ABROAD = "ATMAbroad"
    ATM_FOREIGN_CASH_DEB_CARD = "ATMForeignCashDebCard"
    ATM_ABROAD_GOLD_VISA_DEBIT = "ATMAbroadGoldVisaDebit"
    ATM_SPAIN_CASH_CARD = "ATMSpainCashCard"
    ATM_SPAIN_DEBIT_CARD = "ATMSpainDebitCard"
    ATM_SPAIN_CONVERSION_DEBIT_CARD = "ATMSpainConversionDebitCard"
    ATM_SPAIN_CONVERSION_CASH_CARD = "ATMSpainConversionCashCard"
    ATM_NON_STERLING_WITHDRAWAL = "ATMNonSterlingWithdrawal"
    ATM_ABROAD_VISA_CREDIT = "ATMAbroadVisaCredit"
    ATM_ABROAD_VISA_DEBIT = "ATMAbroadVisaDebit"
    ATM_ABROAD_CON_VISA_GOLD_DEBIT = "ATMAbroadConVisaGoldDebit"
    ATM_WIDTHDRAW_CASH = "ATMWidthdrawCash"
    BACS_ON_LINE_ANCILLIARY = "BACSOnLineAncilliary"
    BACS_BATCH = "BACSBatch"
    BACS_ON_LINE_FILE = "BACSOnLineFile"
    BACS_FILE_ITEM = "BACSFileItem"
    BACS_ON_LINE_SETUP = "BACSOnLineSetup "
    BACS_ITEM = "BACSItem"
    BACS_ITEM_INTERBRANCH = "BACSItemInterbranch"
    BACS_BULK_BATCH = "BACSBulkBatch"
    BACS_ON_LINE_OVERLIMIT = "BACSOnLineOverlimit"
    BACS_ON_LINE_PAYMENT = "BACSOnLinePayment"
    BACS_RECALL_ITEM = "BACSRecallItem"
    BACS_ON_LINE_SERVICE = "BACSOnLineService"
    BACS_BULK_INTERNET = "BACSBulkInternet"
    BACSTEL_DIR_DEB_SMART_CARD = "BACSTELDirDebSmartCard"
    BACSTEL_DIR_DEB_WEB_INIT = "BACSTELDirDebWebInit"
    BACSTE_LIR_DEB_WEB_INIT = "BACSTELirDebWebInit"
    BACSTEL_DIR_DEB_OVERLIMIT = "BACSTELDirDebOverlimit"
    BACSTEL_DIR_DEB_PAYMENT = "BACSTELDirDebPayment"
    BACSTEL_DIR_DEB_SERVICE = "BACSTELDirDebService"
    BACSTEL_DIR_DEB_ANCILLIARY = "BACSTELDirDebAncilliary"
    BACS_DIRECT_ITEM_PROFILE = "BACSDirectItemProfile"
    BACSTEL_ANCILLIARY = "BACSTELAncilliary"
    BACSTEL_SMART_CARD = "BACSTELSmartCard"
    BACSTEL_FILE = "BACSTELFile"
    BACSTEL_SETUP = "BACSTELSetup "
    BACSTEL_OVERLIMIT = "BACSTELOverlimit"
    BACSTEL_PAYMENT = "BACSTELPayment"
    BACSTEL_SERVICE = "BACSTELService"
    CHAPS_OUT_BRANCH = "CHAPSOutBranch"
    CHAPS_CANCELLATION = "CHAPSCancellation"
    CHAPS_OUT_ONLINE_DEPOSIT_ACC = "CHAPSOutOnlineDepositAcc"
    CHAPS_IN = "CHAPSIn"
    CHAPS_OUT_INTER_BANK = "CHAPSOutInterBank"
    CHAPS_INTER_BANK = "CHAPSInterBank"
    CHAPS_OUT_POST = "CHAPSOutPost"
    CHAPS_OUT_INTER_BRANCH = "CHAPSOutInterBranch"
    CHAPS_OUT = "CHAPSOut"
    CHAPS_OUT_ONLINE = "CHAPSOutOnline"
    CHAP_SAND_FOREIGN_PAY = "CHAPSandForeignPay"
    CHAPS_OUT_MANUAL = "CHAPSOutManual"
    CARD_CARD_REPLACEMENT = "CardCardReplacement"
    DRAFTS_COUNTER = "DraftsCounter"
    DRAFTS_BANKERS = "DraftsBankers"
    DRAFTS_INTL_PAYABLE_ABROAD = "DraftsIntlPayableAbroad"
    DRAFTS_LOST_STOLEN = "DraftsLostStolen"
    CARD_PERSONALISED_CARD = "CardPersonalisedCard"
    DRAFTS_INTL_STOPPED_CANCELLED = "DraftsIntlStoppedCancelled"
    EURO_CHQ_X_LESS = "EuroChqXLess"
    EURO_CHQ_X_PLUS = "EuroChqXPlus"
    FPS_OUT_FUTURE_DATED = "FPSOutFutureDated"
    FPS_OUT_IMMEDIATE = "FPSOutImmediate"
    FPS_OUT = "FPSOut"
    FPS_OUT_OWN = "FPSOutOwn"
    FPS_IN_BRANCH = "FPSInBranch"
    FPSUK_PAY_URGENT = "FPSUKPayUrgent"
    LEGAL_ARTICLES_REPORT = "LegalArticlesReport"
    LEGAL_SEALING = "LegalSealing"
    LEGAL_BOND_AND_GUARANTEE = "LegalBondAndGuarantee"
    LEGAL_COURT_ORDER = "LegalCourtOrder"
    LEGAL_CO_SEARCH = "LegalCoSearch"
    LEGAL_DEPOSIT_ASSIGNMENT = "LegalDepositAssignment"
    LEGAL_GUARANTEE_PREP = "LegalGuaranteePrep"
    LEGAL_LIFE_POLICY_PREP_CO = "LegalLifePolicyPrepCo"
    LEGAL_LIFE_POLICY_PREP_PERSONAL = "LegalLifePolicyPrepPersonal"
    LEGAL_PRIORITY_PARI_PASSU = "LegalPriorityPariPassu"
    LEGAL_SUBORDINATION_AGREEMENT = "LegalSubordinationAgreement"
    DIR_DEB_DIRECT_DEBIT_ADMIN = "DirDebDirectDebitAdmin"
    DIR_DEB_DIRECT_DEBIT_CANCEL = "DirDebDirectDebitCancel"
    INTL_PAY_BIB_FOREIGN_LIMIT = "IntlPayBIBForeignLimit"
    INTL_PAY_CREDIT_TRANS_CUST = "IntlPayCreditTransCust"
    INTL_PAY_CREDIT_TRANS_NON_CUST = "IntlPayCreditTransNonCust"
    INTL_PAY_URGENT_PAYMENT_FOREIGN = "IntlPayUrgentPaymentForeign"
    INTL_PAY_EXPRESS_MONEY_MOVER = "IntlPayExpressMoneyMover"
    INTL_PAY_EEA_PAY_URGENT = "IntlPayEEAPayUrgent"
    INTL_PAY_IRISH_PAY_URGENT = "IntlPayIrishPayUrgent"
    INTL_PAY_EEA_PAY = "IntlPayEEAPay"
    INTL_PAY_FOREIGN_IN1_C_PLUS = "IntlPayForeignIn1CPlus"
    INTL_PAY_FOREIGN_PAYMENT_IN_UK_ACC = "IntlPayForeignPaymentInUKAcc"
    INTL_PAY_FOREIGN_CHARGE = "IntlPayForeignCharge"
    INTL_PAY_FOREIGN_CANCELLATION = "IntlPayForeignCancellation"
    INTL_PAY_FOREIGN_STANDARD_EU_EURO_BIC = "IntlPayForeignStandardEUEuroBIC"
    INTL_PAY_FX_FEE_RATE = "IntlPayFXFeeRate"
    INTL_PAY_FOREIGN_INTERNET = "IntlPayForeignInternet"
    INTL_PAY_FOREIGN = "IntlPayForeign"
    INTL_PAY_FOREIGN_INBOUND = "IntlPayForeignInbound"
    INTL_PAY_FX_PAYMENT_OUT = "IntlPayFXPaymentOut"
    INTL_PAY_FOREIGN_IN_SUB1_C = "IntlPayForeignInSub1C"
    INTL_PAY_FX_RATE = "IntlPayFXRate"
    INTL_PAY_FOREIGN_STANDARD_EU_EURO_NO_BIC = "IntlPayForeignStandardEUEuroNoBIC"
    INTL_PAY_FX_PAYMENT_OUT_IR = "IntlPayFXPaymentOutIR"
    INTL_PAY_FX_FEE = "IntlPayFXFee"
    INTL_PAY_PURCHASE_NON_STERLING = "IntlPayPurchaseNonSterling"
    INTL_PAY_POST_PAYMENT_FOREIGN = "IntlPayPostPaymentForeign"
    INTL_PAY_PURCHASE_RATE_NON_STERLING = "IntlPayPurchaseRateNonSterling"
    INTL_PAY_PAYMENT_TRACING = "IntlPayPaymentTracing"
    INTL_PAY_STANDARD_MONEY_MOVER = "IntlPayStandardMoneyMover"
    INTL_PAY_MT101_TRANSACTION = "IntlPayMT101Transaction"
    INTL_PAY_TRANS_NON_STERLING = "IntlPayTransNonSterling"
    INTL_PAY_TRANS_RATE_NON_STERLING = "IntlPayTransRateNonSterling"
    INTL_PAY_FOREIGN_URGENT_EU_EURO_BIC = "IntlPayForeignUrgentEUEuroBIC"
    INTL_PAY_FOREIGN_URGENT_EU_EURO_NO_BIC = "IntlPayForeignUrgentEUEuroNoBIC"
    INTL_PAY_URGENT_PAYMENT_GROUP = "IntlPayUrgentPaymentGroup"
    INTL_PAY_URGENT_PAYMENT_UK = "IntlPayUrgentPaymentUK"
    INTL_PAY_USA_PAY_URGENT = "IntlPayUSAPayUrgent"
    INTL_PAY_CURRENCY_PURCHASE = "IntlPayCurrencyPurchase"
    INTL_PAY_WORLDPAY_PAYMENT = "IntlPayWorldpayPayment"
    INTL_PAY_CURRENCY_WITHDRAW = "IntlPayCurrencyWithdraw"
    INV_PAY_BANK_DETAILS_WRONG = "InvPayBankDetailsWrong"
    INV_PAY_FOREIGN_BCNR = "InvPayForeignBCNR"
    INV_PAY_FOREIGN_RECALL = "InvPayForeignRecall"
    INV_GENERAL_INQ = "InvGeneralInq"
    INV_OLD_INSTRUCTION = "InvOldInstruction"
    INV_PAY_PAYMENT_RECALL = "InvPayPaymentRecall"
    INV_PAY_RETURN_DEBIT_XV_LESS = "InvPayReturnDebitXVLess"
    INV_PAY_RETURN_DEBIT_XV_PLUS = "InvPayReturnDebitXVPlus"
    INV_PAY_STOP_PAYMENT = "InvPayStopPayment"
    INV_PAY_STANDING_ORD_UNPAID = "InvPayStandingOrdUnpaid"
    SAFE_KEEP_ACCESS = "SafeKeepAccess"
    SAFE_KEEP_DEED_MEDIUM = "SafeKeepDeedMedium"
    SAFE_KEEPING_ENVELOPE = "SafeKeepingEnvelope"
    SAFE_KEEPING_INSPECTION = "SafeKeepingInspection"
    SAFE_KEEPING_LARGE_ITEM = "SafeKeepingLargeItem"
    SAFE_KEEP_MULTIPLE_ITEMS = "SafeKeepMultipleItems"
    SAFE_KEEPING_PARCEL = "SafeKeepingParcel"
    SAFE_KEEP_DEED_SMALL = "SafeKeepDeedSmall"
    SAFE_KEEP_ONE_ITEM = "SafeKeepOneItem"
    SAFE_KEEP_SAFE_CUSTODY = "SafeKeepSafeCustody"
    LOAN_ARRANGEMENT_FEE_PC = "LoanArrangementFeePC"
    LOAN_ARRANGEMENT = "LoanArrangement"
    LOAN_EARLY_REPAYMENT = "LoanEarlyRepayment"
    LOAN_LATE_PAYMENT = "LoanLatePayment"
    LOAN_SME_UNSECURED_LOAN = "LoanSMEUnsecuredLoan"
    LOAN_TIERED_ARRANGEMENT = "LoanTieredArrangement"
    NIGHT_SAFE_NIGHT_SAFE_BANK_OPEN = "NightSafeNightSafeBankOpen"
    NIGHT_SAFE_CREDIT_SUB5_K = "NightSafeCreditSub5K"
    NIGHT_SAFE_NIGHT_SAFE = "NightSafeNightSafe"
    NIGHT_SAFE_NIGHT_SAFE_PAID_IN = "NightSafeNightSafePaidIn"
    OVERDRAFT_ANNUAL_REVIEW = "OverdraftAnnualReview"
    OVERDRAFT_TEMP_OVERDRAFT = "OverdraftTempOverdraft"
    OVERDRAFT_UNAUTHORISED_BORROWING = "OverdraftUnauthorisedBorrowing"
    PO_POST_OFFICE_COUNTER_CREDIT = "POPostOfficeCounterCredit"
    PO_POST_OFFICE_CASH_CREDIT = "POPostOfficeCashCredit"
    PO_POST_OFFICE_CASH_OUT = "POPostOfficeCashOut"
    PO_POST_OFFICE_WITHDRAWAL = "POPostOfficeWithdrawal"
    CHQ_BOOK_THEFT_LOSS_ALL_STOPPED = "ChqBookTheftLossAllStopped"
    CHQ_ISSUED_CURRENCY_ACC = "ChqIssuedCurrencyAcc"
    CHQ_COPY = "ChqCopy"
    CHQ_DRAFT = "ChqDraft"
    CHQ_IN = "ChqIn"
    CHQ_DRAFT_STERLING = "ChqDraftSterling"
    CHQ_OUT_ISSUED = "ChqOutIssued"
    CHQ_SPECIAL_CHQ_PRESENTATION = "ChqSpecialChqPresentation"
    CHQ_COUNTER_CHEQUE = "ChqCounterCheque"
    CHQ_CHEQUESWITH_STATEMENT = "ChqChequeswithStatement"
    CHQ_STOPPED = "ChqStopped"
    CHQ_TRANS = "ChqTrans"
    CHQ_DRAFT_FX = "ChqDraftFX"
    CHQ_FOREIGN_COURIER = "ChqForeignCourier"
    CHQ_FOREIGN_NEG_TEN_THOU = "ChqForeignNegTenThou"
    CHQ_FOREIGN_NEG_HUNDRED = "ChqForeignNegHundred"
    CHEQUE_FOREIGN_BANK_DIVI = "ChequeForeignBankDivi"
    CHQ_FOREIGN_NEG_FIFTY_THOU = "ChqForeignNegFiftyThou"
    CHQ_PENSION_CHEQUE = "ChqPensionCheque"
    CHEQUE_FOREIGN_OTHER_DIVI = "ChequeForeignOtherDivi"
    CHQ_FOREIGN_NEG_FIVE_THOU = "ChqForeignNegFiveThou"
    CHQ_FOREIGN_NEG_MAX = "ChqForeignNegMax"
    CHQ_FOREIGN_GBPMMD_PLUS = "ChqForeignGBPMMDPlus"
    CHQ_GIFT_CHEQUE = "ChqGiftCheque"
    CHQ_COUNTER_LODGEMENT = "ChqCounterLodgement"
    CHQ_CASH_DROP_LODGEMENT = "ChqCashDropLodgement"
    CHQ_CHEQUE_PHOTOCOPY = "ChqChequePhotocopy"
    CHQ_POST_OFFICE_CREDIT = "ChqPostOfficeCredit"
    CHQ_POST_OFFICE_CHEQUE_COLLECTED = "ChqPostOfficeChequeCollected"
    CHQ_CHEQUE_RETRIEVAL = "ChqChequeRetrieval"
    CHQ_RECONCILLIATION_PER_TRANS = "ChqReconcilliationPerTrans"
    CHQ_SPECIAL_PRESENTATION_COUNT = "ChqSpecialPresentationCount"
    CHQ_SPECIAL_PRESENTATION_PTT = "ChqSpecialPresentationPTT"
    CHQ_UNPAID_CHARGE = "ChqUnpaidCharge"
    CHQ_UNPAID_TRANS_IN = "ChqUnpaidTransIn"
    CHQ_UNPAID_TRANS_OUT = "ChqUnpaidTransOut"
    CHQ_UNPAID_CHEQUE = "ChqUnpaidCheque"
    REPORT_AUDIT_LETTER = "ReportAuditLetter"
    REPORT_FAX_ADVICE_ADDITIONAL = "ReportFAXAdviceAdditional"
    REPORT_TEL_ADVICE_ADDITIONAL = "ReportTelAdviceAdditional"
    REPORT_CREDIT_HISTORY = "ReportCreditHistory"
    REPORT_CERT_INTEREST_DUPLICATE = "ReportCertInterestDuplicate"
    REPORT_CERT_INTEREST = "ReportCertInterest"
    REPORT_CREDIT_HISTORY_ADDITIONAL_IN_YEAR = "ReportCreditHistoryAdditionalInYear"
    REPORT_FOREIGN_STATUS_ENQ_ELEC = "ReportForeignStatusEnqElec"
    REPORT_FOREIGN_STATUS_ENQ = "ReportForeignStatusEnq"
    REPORT_CASH_BACKOR_INTEREST_ANAL = "ReportCashBackorInterestAnal"
    REPORT_STATEMENT_CHQ_DAILY = "ReportStatementChqDaily"
    REPORT_STATEMENT_CHQ_FORTNIGHTLY = "ReportStatementChqFortnightly"
    REPORT_STATEMENT_CHQ_MONTHLY = "ReportStatementChqMonthly"
    REPORT_STATEMENT_CHQ_WEEKLY = "ReportStatementChqWeekly"
    REPORT_STATEMENT_AND_DIVI_CHQ = "ReportStatementAndDiviChq"
    REPORT_REFERENCE = "ReportReference"
    REPORT_REFERRAL_ITEM = "ReportReferralItem"
    REPORT_STATEMENT_BY_ATM = "ReportStatementByATM"
    REPORT_STATEMENT_BY_BRANCH = "ReportStatementByBranch"
    REPORT_STATEMENT_COPY_REGULAR = "ReportStatementCopyRegular"
    REPORT_STATUS_ENQUIRY = "ReportStatusEnquiry"
    REPORT_STATEMENT_FREQUENT = "ReportStatementFrequent"
    REPORT_STATEMENT_MONTHLY = "ReportStatementMonthly"
    REPORT_STATEMENT_COPY1 = "ReportStatementCopy1"
    REPORT_STATEMENT_TO_BRANCH = "ReportStatementToBranch"
    REPORT_SMS_TEXT_MINI_STATEMENTOR_ALERT = "ReportSMSTextMiniStatementorAlert"
    REPORT_STATEMENT_FORTNIGHTLY = "ReportStatementFortnightly"
    REPORT_SMS_TEXT_MINI_STATEMENT_WO_M = "ReportSMSTextMiniStatementWoM"
    REPORT_SMS_TEXT_ALERT_BALANCE = "ReportSMSTextAlertBalance"
    REPORT_SMS_TEXT_ALERT = "ReportSMSTextAlert"
    REPORT_TAX_CERT = "ReportTaxCert"
    REPORT_WEEKLY_STATEMENT = "ReportWeeklyStatement"
    REPORT_TEXT_MESSAGE_BANKING = "ReportTextMessageBanking"
    SEPA_CANCELLATION = "SEPACancellation"
    SEPA_BRANCH = "SEPABranch"
    SEPA_CREDIT = "SEPACredit"
    SEPA_DIRECT_DEBIT = "SEPADirectDebit"
    SEPA_IN = "SEPAIn"
    SEPA_EURO = "SEPAEuro"
    SEPA_OUT = "SEPAOut"
    SEPA_UNPAID = "SEPAUnpaid"
    SEPA_WINBITS_ANNUAL_SERVICE = "SEPAWinbitsAnnual Service"
    SEPA_WINBITS_TRANSACTION = "SEPAWinbitsTransaction"
    TRANS_BILL_PAYMENT_BRANCH = "TransBillPaymentBranch"
    TRANS_BILL_COLLECT = "TransBillCollect"
    TRANS_TELEPHONE_BILL_PAYMENT = "TransTelephoneBillPayment"
    TRANS_BANK_PAYMENT = "TransBankPayment"
    TRANS_BILL_PAYMENT_TELEPHONE = "TransBillPaymentTelephone"
    TRANS_CORRESPONDENT_BANK_FEE = "TransCorrespondentBankFee"
    TRANS_CREDIT_TRANSFER_UK_DIFFERENT = "TransCreditTransferUKDifferent"
    TRANS_CREDIT_TRANSFER_UK_SAME = "TransCreditTransferUKSame"
    TRANS_CREDIT = "TransCredit"
    TRANS_CREDIT_TRANSFER = "TransCreditTransfer"
    TRANS_BRANCH_CREDIT = "TransBranchCredit"
    TRANS_DEBIT = "TransDebit"
    TRANS_DEB_CARD_DEB = "TransDebCardDeb"
    TRANS_UK_DIR_DEB = "TransUKDirDeb"
    TRANS_MANUAL_DEB = "TransManualDeb"
    TRANS_BUY_FOREIGN_WITH_GBP = "TransBuyForeignWithGBP"
    TRANS_GOOD_VALUE_REQ = "TransGoodValueReq"
    TRANS_SWIFT_OUT_UK_FOREIGN = "TransSWIFTOutUKForeign"
    TRANS_INCONPLETE_INSTRUCTION = "TransInconpleteInstruction"
    TRANS_MANUAL_ENTRIES = "TransManualEntries"
    TRANS_MANUAL_TRANS = "TransManualTrans"
    TRANS_NON_STERLING = "TransNonSterling"
    TRANS_POS_SALE_FOREIGN = "TransPOSSaleForeign"
    TRANS_PRI_PAYMENT_POST = "TransPriPaymentPost"
    TRANS_POS_SALE_UK = "TransPOSSaleUK"
    TRANS_RETURN_PAYMENT = "TransReturnPayment"
    TRANS_RECONCILIATION_PER_TRANS = "TransReconciliationPerTrans"
    TRANS_STANDING_ORD_ADMIN = "TransStandingOrdAdmin"
    TRANS_STANDING_ORD = "TransStandingOrd"
    TRANS_STANDING_ORD_MAN_PAY = "TransStandingOrdManPay"
    TRANS_TRAVELLERS_CHQ_OTHER_BANK = "TransTravellersChqOtherBank"
    TRANS_TEL_BUSI_PRI_PAYMENT_FOREIGN_TO_UK_ACC = "TransTelBusiPriPaymentForeignToUKAcc"
    TRANS_TELE_ITEM = "TransTeleItem"
    TRANS_TEL_BUSI_PRI_PAYMENT_TO_GRP_ACC = "TransTelBusiPriPaymentToGrpAcc"
    TRANS_TRAVELLERS_CHQ_RATE = "TransTravellersChqRate"
    TRANS_TRANSFER_EX_GROUP = "TransTransferExGroup"
    TRANS_UNAUTHORISED_PAID_TRANS = "TransUnauthorisedPaidTrans"
    TRANS_URGENT_PAYMENT_POSTAL = "TransUrgentPaymentPostal"
    TRANS_UNPAID_TRANS = "TransUnpaidTrans"
    TRANS_TEL_BUSI_PRI_PAYMENT_TO_NON_GRP_ACC = "TransTelBusiPriPaymentToNonGrpAcc"
    TRANS_SWIFT_OUT_NON_EEA_STERLING = "TransSWIFTOutNonEEASterling"
    AUTO_AUTO_CREDIT = "AutoAutoCredit"
    AUTO_AUTOMATED_ENTRIES = "AutoAutomatedEntries"
    AUTO_AUTO_CREDIT_PHONE_INET = "AutoAutoCreditPhoneInet"
    AUTO_AUTOMATED_TRANS = "AutoAutomatedTrans"
    AUTO_DEBIT_CARD_COMMERCIAL = "AutoDebitCardCommercial"
    AUTO_FPS_AUTO_CREDIT = "AutoFPSAutoCredit"
    VISA_CONVERT_ABROAD_FOREIGN = "VisaConvertAbroadForeign"
    VISA_BUREAU_DE_CHANGE = "VisaBureauDeChange"
    VISA_TRAVELLERS_CHQOR_CURRENCY = "VisaTravellersChqorCurrency"
    ONLINE_INTERNET_BILL_PAYMENT = "OnlineInternetBillPayment"
    ONLINE_BUSINESS_ONLINE_EURO_PAYMENT = "OnlineBusinessOnlineEuroPayment"
    ONLINE_BUSINESS_ONLINE_URGENT_EURO_PAYMENT = "OnlineBusinessOnlineUrgentEuroPayment"
    ONLINE_BUSINESS_ONLINE_FOREIGN_PAYMENT = "OnlineBusinessOnlineForeignPayment"
    ONLINE_INTERBANK_TRANSFER = "OnlineInterbankTransfer"
    ONLINE_INTERBANK_PER_TRANSFER = "OnlineInterbankPerTransfer"
    ONLINE_INTERBRANCH_TRANSFER = "OnlineInterbranchTransfer"
    ONLINE_INTERBRANCH_PER_TRANSFER = "OnlineInterbranchPerTransfer"
    ONLINE_SUBSCRIPTION_MONTHLY = "OnlineSubscriptionMonthly"
    ONLINE_BANKING_PAYMENT = "OnlineBankingPayment"
    ONLINE_BANKING_SUBSCRIPTION = "OnlineBankingSubscription"
    ONLINE_POS_SALE = "OnlinePOSSale"
    ONLINE_PERSONAL_CUST_ANCILLARYS = "OnlinePersonalCustAncillarys"
    ONLINE_PERSONAL_CUST_SERVICE = "OnlinePersonalCustService"
    ONLINE_PERSONAL_CUST_OVERLIMITS = "OnlinePersonalCustOverlimits"
    ONLINE_REPLACEMENT_CARD_READER = "OnlineReplacementCardReader"
    ONLINE_PERSONAL_CUST_SET_UP = "OnlinePersonalCustSetUp"
    ONLINE_PERSONAL_CUST_TRANSACTION = "OnlinePersonalCustTransaction"
    ONLINE_PAYMENTIN_GB_PTO_UK = "OnlinePaymentinGBPtoUK"
    ONLINE_URGENT_PAYMENT = "OnlineUrgentPayment"
    ONLINE_PAYMENTIN_US_DTO_US = "OnlinePaymentinUSDtoUS"
    ONLINE_BULK_DIRECT_DEB_STERLING = "OnlineBulkDirectDebSterling"
    FOREIGN_CHQ_SENT = "ForeignChqSent"
    FOREIGN_CHQ_SELF = "ForeignChqSelf"
    FOREIGN_CHQ_ENCASHMENT = "ForeignChqEncashment"
    FOREIGN_FX_INWARDS_CUST = "ForeignFXInwardsCust"
    FOREIGN_FX_TRANSFERS_ROI = "ForeignFXTransfersROI"
    FOREIGN_FX_FORWARD_TRANS = "ForeignFXForwardTrans"
    FOREIGN_FX_TRANSFERS_BOI = "ForeignFXTransfersBOI"
    FOREIGN_EX_MAINTENANCE = "ForeignExMaintenance"
    FOREIGN_FX_INWARDS_NON_CUST = "ForeignFXInwardsNonCust"
    FOREIGN_FX_OUTWARDS = "ForeignFXOutwards"
    FOREIGN_PURCHASE = "ForeignPurchase"
    FOREIGN_STATUS_REP = "ForeignStatusRep"
    FOREIGN_CHQ_DRAFT = "ForeignChqDraft"
    FOREIGN_CHQ_C_LESS = "ForeignChqCLess"
    FOREIGN_CHQ_M_LESS = "ForeignChqMLess"
    FOREIGN_CHQ_OTHER = "ForeignChqOther"
    FOREIGN_CHQ_M_PLUS = "ForeignChqMPlus"
    FOREIGN_CHQ_CCC = "ForeignChqCCC"
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_ACCOUNT_FEE_QUARTERLY = "ServiceCAccountFeeQuarterly"
    SERVICE_C_BALANCE_HANDLING = "ServiceCBalanceHandling"
    SERVICE_C_FIXED_TARIFF = "ServiceCFixedTariff"
    SERVICE_C_BUSI_DEP_ACC_BREAKAGE = "ServiceCBusiDepAccBreakage"
    SERVICE_C_MONITOR_DAILY = "ServiceCMonitorDaily"
    SERVICE_C_MANAGEMENT_FEE = "ServiceCManagementFee"
    SERVICE_C_MINIMUM_MONTHLY_FEE = "ServiceCMinimumMonthlyFee"
    SERVICE_C_MONITOR_MONTHLY = "ServiceCMonitorMonthly"
    SERVICE_C_MONITOR_WEEKLY = "ServiceCMonitorWeekly"
    SERVICE_C_SECURITY_FEE = "ServiceCSecurityFee"
    SERVICE_CMT940_ACCOUNT_FIRST = "ServiceCMT940AccountFirst"
    SERVICE_CMT940_ACCOUNT_SUBSEQUENT = "ServiceCMT940AccountSubsequent"
    SERVICE_C_OTHER = "ServiceCOther"
    COUNTER_COIN_HANDLING = "CounterCoinHandling"
    COUNTER_CASH_IN = "CounterCashIn"
    COUNTER_CASH_IN_NOT_US = "CounterCashInNotUs"
    COUNTER_CASH_OUT = "CounterCashOut"
    COUNTER_CASH_X = "CounterCashX"
    COUNTER_FOREIGN_CASH_MAX = "CounterForeignCashMax"
    COUNTER_FOREIGN_NOTE_HANDLING = "CounterForeignNoteHandling"
    COUNTER_FOREIGN_CASH_OUT = "CounterForeignCashOut"
    COUNTER_CASH_FEE_RATE = "CounterCashFeeRate"
    COUNTER_FOREIGN_CASH_OUT_TX = "CounterForeignCashOutTx"
    COUNTER_COUNTER_LODGEMENT = "CounterCounterLodgement"
    COUNTER_CASH_DROP_LODGEMENT = "CounterCashDropLodgement"
    COUNTER_NOTES_LODGED = "CounterNotesLodged"
    COUNTER_NOTES_OUT = "CounterNotesOut"
    COUNTER_CASH_IN_OWN = "CounterCashInOwn"
    COUNTER_PAID_TRANS = "CounterPaidTrans"
    COUNTER_CASH_FEE_PERCENT = "CounterCashFeePercent"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetail:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetail
    Fee Detail
    """
    
    fee_sub_details: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeSubDetails') }})
    fee_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    other: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Other') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetails:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetails
    Fee Details
    """
    
    fee_detail: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeDetail') }})
    fee_sub_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeSubType') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFees:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFees
    Fees
    """
    
    fee_details: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeDetails') }})
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    fee_higher_tier: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeHigherTier') }})
    fee_lower_tier: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeLowerTier') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndCharges:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndCharges
    Fees And Charges
    """
    
    fees: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFees = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fees') }})
    product_state: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductState') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum(str, Enum):
    ANDROID_PAY = "AndroidPay"
    APPLE_PAY = "ApplePay"
    ISSUER_MOBILE_APP = "IssuerMobileApp"
    MOBILE_BANKING_APP = "MobileBankingApp"
    OTHER = "Other"
    PAY_M = "PayM"
    SAMSUNG_PAY = "SamsungPay"
    VODAFONE_WALLET = "VodafoneWallet"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand
    Brand
    """
    
    trademark_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkID') }})
    trademark_ipo_code: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkIPOCode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName
    Organisation Name
    """
    
    legal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LegalName') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation
    Parent organisation
    """
    
    organisation_name: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganisationName') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BIC') }})
    lei: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LEI') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation
    Organisation
    """
    
    brand: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Brand') }})
    parent_organisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentOrganisation') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum(str, Enum):
    PERIODIC = "Periodic"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SETUP = "Setup"
    REVIEW = "Review"
    RENEWAL = "Renewal"
    MINIMUM_SETUP = "MinimumSetup"
    MAXIMUM_SETUP = "MaximumSetup"
    TOTAL = "Total"
    ITEM = "Item"
    EMERGENCY_LENDING = "EmergencyLending"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndCharges:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndCharges
    Overdraft Fees Charges
    """
    
    fee_charge_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeType') }})
    fee_charge_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeAmount') }})
    fee_charge_application_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeApplicationFrequency') }})
    fee_charge_calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCalculationFrequency') }})
    fee_charge_other_application_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherApplicationFrequency') }})
    fee_charge_other_calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherCalculationFrequency') }})
    fee_charge_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherType') }})
    fee_charge_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRate') }})
    fee_charge_rate_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateOtherType') }})
    fee_charge_rate_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateType') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum(str, Enum):
    UNARRANGED = "Unarranged"
    ARRANGED = "Arranged"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum(str, Enum):
    PERIODIC = "Periodic"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SETUP = "Setup"
    REVIEW = "Review"
    RENEWAL = "Renewal"
    MINIMUM_SETUP = "MinimumSetup"
    MAXIMUM_SETUP = "MaximumSetup"
    TOTAL = "Total"
    ITEM = "Item"
    EMERGENCY_LENDING = "EmergencyLending"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndCharges:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndCharges
    Overdraft Fees Charges
    """
    
    fee_charge_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeType') }})
    fee_charge_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeAmount') }})
    fee_charge_application_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeApplicationFrequency') }})
    fee_charge_calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCalculationFrequency') }})
    fee_charge_other_application_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherApplicationFrequency') }})
    fee_charge_other_calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherCalculationFrequency') }})
    fee_charge_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherType') }})
    fee_charge_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRate') }})
    fee_charge_rate_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateOtherType') }})
    fee_charge_rate_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateType') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
    Other Code Type
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum(str, Enum):
    PERIODIC = "Periodic"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SETUP = "Setup"
    REVIEW = "Review"
    RENEWAL = "Renewal"
    MINIMUM_SETUP = "MinimumSetup"
    MAXIMUM_SETUP = "MaximumSetup"
    TOTAL = "Total"
    ITEM = "Item"
    EMERGENCY_LENDING = "EmergencyLending"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
    Overdraft Fees Charges
    """
    
    fee_charge_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeType') }})
    fee_charge_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeAmount') }})
    fee_charge_application_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeApplicationFrequency') }})
    fee_charge_calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCalculationFrequency') }})
    fee_charge_other_application_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherApplicationFrequency') }})
    fee_charge_other_calculation_frequency: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherCalculationFrequency') }})
    fee_charge_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherType') }})
    fee_charge_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRate') }})
    fee_charge_rate_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateOtherType') }})
    fee_charge_rate_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateType') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBand:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBand
    Tiers
    """
    
    tier_value_maximum: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    tier_value_minimum: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    ear: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    fees_and_charges: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    tier_band_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSet:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSet
    Tier Bandset
    """
    
    arrangement_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrangementType') }})
    cma_defined_indicator: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CMADefinedIndicator') }})
    arrangement_other_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementOtherType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrangementOtherType') }})
    buffer_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferAmount') }})
    ear: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    fees_and_charges: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_tier_band: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBand]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBand') }})
    tier_band_set_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandSetIdentification') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnum(str, Enum):
    COMMITTED = "Committed"
    ON_DEMAND = "OnDemand"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraft:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraft
    Overdraft
    """
    
    date_of_change: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    fee_charge_negotiable_indicator: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeNegotiableIndicator') }})
    fees_and_charges: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    length_promotional_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    maximum_monthly_overdraft_charge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumMonthlyOverdraftCharge') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_product_state: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftProductState') }})
    overdraft_tier_band_set: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBandSet') }})
    overdraft_type: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftType') }})
    start_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Term') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum(str, Enum):
    BASIC = "Basic"
    BUSINESS = "Business"
    GENERAL = "General"
    GRADUATE = "Graduate"
    INTERNATIONAL = "International"
    PACKAGED = "Packaged"
    PERSONAL = "Personal"
    PREMIUM = "Premium"
    REWARD = "Reward"
    SME = "SME"
    STUDENT = "Student"
    YOUNG_ADULT = "YoungAdult"
    YOUTH = "Youth"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum(str, Enum):
    PCA = "PCA"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONData:
    r"""GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONData
    Personal Current Account
    """
    
    access_channels: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessChannels') }})
    benefits: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benefits') }})
    ca_pricing: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricing] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAPricing') }})
    card_type: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardType') }})
    card_withdrawal_limit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardWithdrawalLimit') }})
    cheque_book_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChequeBookAvailable') }})
    contactless: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Contactless') }})
    credit_interest: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterest') }})
    credit_scoring_part_of_account_opening_for_getting_an_account: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningForGettingAnAccount') }})
    currency: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    eligibility: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Eligibility') }})
    fees_and_charges: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndCharges] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    international_payments_supported: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InternationalPaymentsSupported') }})
    organisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organisation') }})
    overdraft_offered: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftOffered') }})
    product_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductDescription') }})
    product_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductIdentifier') }})
    product_segment: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSegment') }})
    product_type: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductType') }})
    product_url: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductURL') }})
    tsand_cs: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TsandCs') }})
    card_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardNotes') }})
    credit_scoring_part_of_account_opening_for_id_verification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningForIDVerification') }})
    credit_scoring_part_of_account_opening_id_verification_is_a_hard_or_soft_credit_score: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore') }})
    credit_scoring_part_of_account_opening_id_verification_text: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningIDVerificationText') }})
    credit_scoring_part_of_account_opening_is_a_hard_or_soft_credit_score: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore') }})
    credit_scoring_part_of_account_opening_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningText') }})
    feature: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Feature') }})
    maximum_monthly_charge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumMonthlyCharge') }})
    mobile_wallet: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobileWallet') }})
    overdraft: Optional[list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraft]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overdraft') }})
    product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agreement') }})
    last_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('License') }})
    terms_of_use: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TermsOfUse') }})
    total_results: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResults') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: list[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetPersonalCurrentAccountsRequest:
    headers: GetPersonalCurrentAccountsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetPersonalCurrentAccountsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error_object: Optional[GetPersonalCurrentAccounts400ErrorObject] = dataclasses.field(default=None)
    four_hundred_and_eight_error_object: Optional[GetPersonalCurrentAccounts408ErrorObject] = dataclasses.field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetPersonalCurrentAccounts429ErrorObject] = dataclasses.field(default=None)
    five_hundred_error_object: Optional[GetPersonalCurrentAccounts500ErrorObject] = dataclasses.field(default=None)
    five_hundred_and_three_error_object: Optional[GetPersonalCurrentAccounts503ErrorObject] = dataclasses.field(default=None)
    error_object: Optional[GetPersonalCurrentAccountsErrorObject] = dataclasses.field(default=None)
    get_personal_current_accounts_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON] = dataclasses.field(default=None)
    
