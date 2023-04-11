import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBusinessCurrentAccountsRequest extends SpeakeasyBase {
    /**
     * Used for conditional request, to retrieve data only if modified since a given date
     */
    ifModifiedSince?: string;
    /**
     * Used for conditional request, to retrieve data only if the given Etag value does not match
     */
    ifNoneMatch?: string;
}
/**
 * A standard error response.
 */
export declare class GetBusinessCurrentAccountsErrorObject extends SpeakeasyBase {
    /**
     * Further details describing the error
     */
    description: string;
    /**
     * This corresponds to the HTTP status code
     */
    status: string;
    /**
     * A short title of the type of error
     */
    title: string;
}
export declare enum GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetBusinessCurrentAccounts503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetBusinessCurrentAccounts503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
/**
 * The service is temporarily unavailable.
 */
export declare class GetBusinessCurrentAccounts503ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts503ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts503ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetBusinessCurrentAccounts500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetBusinessCurrentAccounts500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
/**
 * An error occurred on the server. No further information is available.
 */
export declare class GetBusinessCurrentAccounts500ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts500ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts500ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetBusinessCurrentAccounts429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetBusinessCurrentAccounts429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
/**
 * You have requested this resource too often. Slow down.
 */
export declare class GetBusinessCurrentAccounts429ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts429ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts429ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetBusinessCurrentAccounts408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetBusinessCurrentAccounts408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
/**
 * Your client has failed to submit a request, and a timeout has occurred.
 */
export declare class GetBusinessCurrentAccounts408ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts408ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts408ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetBusinessCurrentAccounts400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetBusinessCurrentAccounts400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
/**
 * You have sent a request which could not be understood.
 */
export declare class GetBusinessCurrentAccounts400ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts400ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts400ErrorObjectTitleEnum;
}
/**
 * Channel
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum {
    Atm = "ATM",
    Branch = "Branch",
    BusinessCommercialCentre = "BusinessCommercialCentre",
    CallCentre = "CallCentre",
    MobileApps = "MobileApps",
    MobileBanking = "MobileBanking",
    Online = "Online",
    Phone = "Phone",
    Post = "Post",
    PostOffice = "PostOffice",
    RelationshipManager = "RelationshipManager",
    Text = "Text"
}
/**
 * Criteria that is required in order to be eligible for the Benefit
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit",
    Deposit = "Deposit",
    DirectDebit = "DirectDebit",
    InitialDeposit = "InitialDeposit",
    InternetLogon = "InternetLogon",
    MobileLogon = "MobileLogon",
    RegularDeposit = "RegularDeposit"
}
/**
 * Benefit detail
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
    /**
     * A textual explanation of what the benefit is
     */
    benefitDescription?: string;
    /**
     * Unique benefit identifier per organisation
     */
    benefitID?: string;
    /**
     * The name of the benefit
     */
    benefitName?: string;
    /**
     * Type that represents the nature of the benefit
     */
    benefitType?: string;
    /**
     * The value or values permissible for a specific benefit for an individual product representing a product characteristic
     */
    benefitValue?: string;
    /**
     * Counter for the criteria (e.g. number of DD)
     */
    counter?: number;
    criteriaType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
    /**
     * Is the benefit part of the default account
     */
    defaultToAccounts?: boolean;
    /**
     * Maximum amount for the criteria
     */
    maximumCriteria?: string;
    /**
     * Minimum amount for the criteria
     */
    minimumCriteria?: string;
    /**
     * If the benefit is temporal the end date is when the benefit is no longer applicable
     */
    promotionEndDate?: string;
    /**
     * If the benefit is temporal the start date is when the benefit comes into effect
     */
    promotionStartDate?: string;
}
/**
 * Benefit Item
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail[];
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Describes the length if only a duration is given instead of a date in days
     */
    lengthPromotionalInDays?: number;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Benefit Subtype Code
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup extends SpeakeasyBase {
    /**
     * Benefit Item
     */
    benefitItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem;
    /**
     * Benefit Subtype Code
     */
    benefitSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits extends SpeakeasyBase {
    /**
     * Describe  one or more benefits if they exist
     */
    benefit: boolean;
    benefitGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup[];
}
/**
 * Card Pricing
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCAPricingCAPricingItem extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder
     */
    exchangeRateAdjustment?: string;
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Describes if the offering is promotional or a description of a future state.
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCAPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Card Price
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCAPricing extends SpeakeasyBase {
    /**
     * Card Pricing
     */
    caPricingItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCAPricingCAPricingItem;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCAPricingProductStateEnum;
}
/**
 * Indicates the card scheme
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum {
    BasicCard = "BasicCard",
    BusinessQuickLodgeCard = "BusinessQuickLodgeCard",
    Cashcard = "Cashcard",
    ContactlessCashcard = "ContactlessCashcard",
    ContactlessDebitMastercard = "ContactlessDebitMastercard",
    ContactlessDebitVisa = "ContactlessDebitVisa",
    DebitMastercard = "DebitMastercard",
    VisaDebit = "VisaDebit",
    DepositCard = "DepositCard",
    OperatorCard = "OperatorCard",
    POCACard = "POCACard"
}
/**
 * How often is interest applied to account
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight"
}
/**
 * Method for interest calculation
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * Credit Interest Payment Rate Type
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}
/**
 * Rate Comparison Type
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}
/**
 * Credit Interest Tiers
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
    /**
     * AER or APR Rate for comparison
     */
    apraerRate?: string;
    /**
     * Special charge on tiered overdraft
     */
    dailyChargeForMaximum?: string;
    /**
     * Special charge on tiered overdraft
     */
    dailyChargeForMinimum?: string;
    /**
     * Identifier for the tier
     */
    interestTier?: string;
    /**
     * Rate being paid by the bank (gross)
     */
    rate?: string;
    /**
     * Rate Comparison Type
     */
    rateComparisonType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;
    /**
     * Max Value of interst tier
     */
    tierValueMaximum?: string;
    /**
     * Lower value of interest tier
     */
    tierValueMinimum?: string;
}
/**
 * Credit Interest Payment Method Code
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound",
    PayAway = "PayAway",
    SelfCredit = "SelfCredit",
    SimpleInterest = "SimpleInterest"
}
/**
 * Credit Interest item
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
    /**
     * How often is interest applied to account
     */
    calculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;
    /**
     * Method for interest calculation
     */
    calculationMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * If interest is charged on a specific date range as end date (often used for promotion)
     */
    endDate?: string;
    /**
     * Fixed interest length in days
     */
    fixedInterestLength?: number;
    /**
     * Additional notes to supplement the interest details
     */
    interestNotes?: string;
    /**
     * Credit Interest Payment Rate Type
     */
    interestRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;
    interestTiers?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Credit Interest Payment Method Code
     */
    paymentMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;
    /**
     * If interest is charged on a specific date range as start date (often used for promotion)
     */
    startDate?: string;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Describes if the offering is promotional, regular or a description of a future state
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Credit Interest Group
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup extends SpeakeasyBase {
    /**
     * Credit Interest item
     */
    creditInterestItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem;
    /**
     * Describes if the offering is promotional, regular or a description of a future state
     */
    interestTierSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}
/**
 * Credit Interest
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest extends SpeakeasyBase {
    /**
     * Is credit paid to the account. The answer will be the condition of all other fields to be filled
     */
    creditCharged: boolean;
    creditInterestGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup[];
}
/**
 * Indicates the type of scoring
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
/**
 * Indicates the type of scoring
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
/**
 * Eligibility type
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum {
    AnyBusinessCustomer = "AnyBusinessCustomer",
    BusinessOnly = "BusinessOnly",
    CreditCard = "CreditCard",
    CreditScoring = "CreditScoring",
    EmailAddress = "EmailAddress",
    ExistingCustomers = "ExistingCustomers",
    IdAndV = "IdAndV",
    Mortgage = "Mortgage",
    NoArrearsOnLoan = "NoArrearsOnLoan",
    NoCustomerInArrears = "NoCustomerInArrears",
    NoOverOverdraftThirtyDays = "NoOverOverdraftThirtyDays",
    NoSoleUkAccountOrBankrupt = "NoSoleUkAccountOrBankrupt",
    Ntb = "NTB",
    NTBBusiness = "NTBBusiness",
    SoleStudentAccount = "SoleStudentAccount",
    SoleUkAccount = "SoleUkAccount",
    StudentsOnly = "StudentsOnly",
    TwoMonthsOfCourseStart = "TwoMonthsOfCourseStart",
    UCASFulltimeTwoYears = "UCASFulltimeTwoYears"
}
/**
 * Specific eligibility for marketing
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
/**
 * The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
/**
 * Indicates a customer must be current resident of a geographic area/country
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum {
    Uk = "UK",
    Eea = "EEA",
    Eu = "EU",
    Efta = "EFTA",
    GbEng = "GB - ENG",
    GbNir = "GB - NIR",
    GbSct = "GB - SCT",
    GbWls = "GB - WLS",
    Irl = "IRL"
}
/**
 * Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility extends SpeakeasyBase {
    /**
     * Indicates a customer's age is part of eligibility criteria
     */
    ageRestricted: boolean;
    /**
     * Annual Business Turnover
     */
    annualBusinessTurnover?: string;
    /**
     * Annual Business Turnover Currency
     */
    annualBusinessTurnoverCurrency?: string;
    /**
     * One paragraph detailing the eligibility
     */
    description: string;
    /**
     * Free text description, denotes non standard eligibilities not included in the code list
     */
    eligibilityName?: string;
    /**
     * Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions
     */
    eligibilityNotes?: string;
    /**
     * Eligibility type
     */
    eligibilityType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum;
    /**
     * Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
     */
    incomeCondition?: string;
    /**
     * Indicates if eligibility linked to income
     */
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum[];
    /**
     * Maximum number of the same prodcut the customer may hold
     */
    maxNumberOfAccounts?: string;
    /**
     * Maximum age, in years, allowed to hold the account
     */
    maximumAge?: number;
    /**
     * Maximum age, in years, to open an account
     */
    maximumAgeToOpen?: number;
    /**
     * A maximum amount to be deposited at opening
     */
    maximumOpeningAmount?: boolean;
    /**
     * Minimum Income Amount required to paid into the account
     */
    minIncomeTurnoverPaidIntoAccount?: number;
    /**
     * Minimum age, in years, required to hold an account
     */
    minimumAge?: number;
    /**
     * A minimum deposit required to hold this account
     */
    minimumDeposit?: boolean;
    /**
     * The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
     */
    minimumIncomeFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum;
    /**
     * Minimum income / Turnover required to hold the product
     */
    minimumIncomeTurnoverAmount?: string;
    /**
     * Minimum income / Turnover Currency
     */
    minimumIncomeTurnoverCurrency?: string;
    /**
     * Minimum Operating Balance
     */
    minimumOperatingBalance?: string;
    /**
     * Minimum Operating Balance currency
     */
    minimumOperatingBalanceCurrency?: string;
    /**
     * Is there a Minimum Operating Balance?
     */
    minimumOperatingBalanceExists?: boolean;
    /**
     * Maximum Amount to be depositing at opening
     */
    openingDepositMaximumAmount?: string;
    /**
     * The currency of the Minimum Amount to be depositing at opening
     */
    openingDepositMaximumCurrency?: string;
    /**
     * Minimum Amount to be held on account
     */
    openingDepositMinimum?: string;
    /**
     * The currency of the Minimum Amount to be depositing at opening
     */
    openingDepositMinimumCurrency?: string;
    /**
     * Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature
     */
    otherFinancialHoldingRequired: boolean;
    /**
     * Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280
     */
    previousBankruptcy: boolean;
    /**
     * Indicates a customer's residency forms part of the eligibility criteria
     */
    residencyRestricted: boolean;
    /**
     * Indicates a customer must be current resident of a geographic area/country
     */
    residencyRestrictedRegion?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum;
    /**
     * Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
     */
    singleJointIncome?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum;
    /**
     * Is the product available to operate as a Clubs or Societies account?
     */
    thirdSectorOrganisations: boolean;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Feature Details
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails extends SpeakeasyBase {
    /**
     * Criteria that is required in order to be eligible for the feature
     */
    criteriaType?: string;
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * A textual explanation of what the feature
     */
    featureDescription?: string;
    /**
     * The name of the feature
     */
    featureName?: string;
    featureSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum;
    /**
     * Type that represents the nature of the feature
     */
    featureType?: string;
    /**
     * The value or values permissible for a specific feature for an individual product representing a product characteristic
     */
    featureValue?: string;
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Describes if the offering is promotional or a description of a future state.
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Account Features
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Indicates whether the account has any feature
     */
    existingFeature: boolean;
    /**
     * Feature details
     */
    featureDetails?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails[];
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Triggering frequency of the fee
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AtTimeOfLoanRepayment = "AtTimeOfLoanRepayment",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    EveryFiveBusinessDays = "EveryFiveBusinessDays",
    Item = "Item",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StartOfLoan = "StartOfLoan",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
/**
 * Fee Sub Details
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
    /**
     * Fee in GBP
     */
    feeAmount?: string;
    /**
     * Triggering frequency of the fee
     */
    feeFrequency: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
    /**
     * Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
     */
    feeHigherTier?: number;
    /**
     * Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range
     */
    feeLowerTier?: number;
    /**
     * Fee in GBP
     */
    feeMax?: string;
    /**
     * Fee in GBP
     */
    feeMin?: string;
    /**
     * % Rate
     */
    feeRate?: string;
    /**
     * Supplementary information for fees and charges
     */
    feesAndChargesNotes?: string;
    /**
     * Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor
     */
    negotiable: boolean;
    /**
     * Representative Rate
     */
    representativeRate?: string;
}
/**
 * A description of the Fee type
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
    Other = "Other",
    ATMDonation = "ATMDonation",
    ATMDeposATMPaidIn = "ATMDeposATMPaidIn",
    ReportCertBalance = "ReportCertBalance",
    ATMAbroadConVisaCredit = "ATMAbroadConVisaCredit",
    ATMAbroadConVisaDebit = "ATMAbroadConVisaDebit",
    ATMCardnetEnvIn = "ATMCardnetEnvIn",
    ATMCashGroupATMCreditCard = "ATMCashGroupATMCreditCard",
    ATMCashNonGroupATMCredittcard = "ATMCashNonGroupATMCredittcard",
    ATMCashGroupATMDebitCard = "ATMCashGroupATMDebitCard",
    ATMCashNonGroupATMDebitcard = "ATMCashNonGroupATMDebitcard",
    ATMConGroupATM = "ATMConGroupATM",
    ATMAbroad = "ATMAbroad",
    ATMForeignCashDebCard = "ATMForeignCashDebCard",
    ATMAbroadGoldVisaDebit = "ATMAbroadGoldVisaDebit",
    ATMSpainCashCard = "ATMSpainCashCard",
    ATMSpainDebitCard = "ATMSpainDebitCard",
    ATMSpainConversionDebitCard = "ATMSpainConversionDebitCard",
    ATMSpainConversionCashCard = "ATMSpainConversionCashCard",
    ATMNonSterlingWithdrawal = "ATMNonSterlingWithdrawal",
    ATMAbroadVisaCredit = "ATMAbroadVisaCredit",
    ATMAbroadVisaDebit = "ATMAbroadVisaDebit",
    ATMAbroadConVisaGoldDebit = "ATMAbroadConVisaGoldDebit",
    ATMWidthdrawCash = "ATMWidthdrawCash",
    BACSOnLineAncilliary = "BACSOnLineAncilliary",
    BACSBatch = "BACSBatch",
    BACSOnLineFile = "BACSOnLineFile",
    BACSFileItem = "BACSFileItem",
    BACSOnLineSetup = "BACSOnLineSetup ",
    BACSItem = "BACSItem",
    BACSItemInterbranch = "BACSItemInterbranch",
    BACSBulkBatch = "BACSBulkBatch",
    BACSOnLineOverlimit = "BACSOnLineOverlimit",
    BACSOnLinePayment = "BACSOnLinePayment",
    BACSRecallItem = "BACSRecallItem",
    BACSOnLineService = "BACSOnLineService",
    BACSBulkInternet = "BACSBulkInternet",
    BACSTELDirDebSmartCard = "BACSTELDirDebSmartCard",
    BACSTELDirDebWebInit = "BACSTELDirDebWebInit",
    BACSTELirDebWebInit = "BACSTELirDebWebInit",
    BACSTELDirDebOverlimit = "BACSTELDirDebOverlimit",
    BACSTELDirDebPayment = "BACSTELDirDebPayment",
    BACSTELDirDebService = "BACSTELDirDebService",
    BACSTELDirDebAncilliary = "BACSTELDirDebAncilliary",
    BACSDirectItemProfile = "BACSDirectItemProfile",
    BACSTELAncilliary = "BACSTELAncilliary",
    BACSTELSmartCard = "BACSTELSmartCard",
    BACSTELFile = "BACSTELFile",
    BACSTELSetup = "BACSTELSetup ",
    BACSTELOverlimit = "BACSTELOverlimit",
    BACSTELPayment = "BACSTELPayment",
    BACSTELService = "BACSTELService",
    CHAPSOutBranch = "CHAPSOutBranch",
    CHAPSCancellation = "CHAPSCancellation",
    CHAPSOutOnlineDepositAcc = "CHAPSOutOnlineDepositAcc",
    CHAPSIn = "CHAPSIn",
    CHAPSOutInterBank = "CHAPSOutInterBank",
    CHAPSInterBank = "CHAPSInterBank",
    CHAPSOutPost = "CHAPSOutPost",
    CHAPSOutInterBranch = "CHAPSOutInterBranch",
    CHAPSOut = "CHAPSOut",
    CHAPSOutOnline = "CHAPSOutOnline",
    CHAPSandForeignPay = "CHAPSandForeignPay",
    CHAPSOutManual = "CHAPSOutManual",
    CardCardReplacement = "CardCardReplacement",
    DraftsCounter = "DraftsCounter",
    DraftsBankers = "DraftsBankers",
    DraftsIntlPayableAbroad = "DraftsIntlPayableAbroad",
    DraftsLostStolen = "DraftsLostStolen",
    CardPersonalisedCard = "CardPersonalisedCard",
    DraftsIntlStoppedCancelled = "DraftsIntlStoppedCancelled",
    EuroChqXLess = "EuroChqXLess",
    EuroChqXPlus = "EuroChqXPlus",
    FPSOutFutureDated = "FPSOutFutureDated",
    FPSOutImmediate = "FPSOutImmediate",
    FPSOut = "FPSOut",
    FPSOutOwn = "FPSOutOwn",
    FPSInBranch = "FPSInBranch",
    FPSUKPayUrgent = "FPSUKPayUrgent",
    LegalArticlesReport = "LegalArticlesReport",
    LegalSealing = "LegalSealing",
    LegalBondAndGuarantee = "LegalBondAndGuarantee",
    LegalCourtOrder = "LegalCourtOrder",
    LegalCoSearch = "LegalCoSearch",
    LegalDepositAssignment = "LegalDepositAssignment",
    LegalGuaranteePrep = "LegalGuaranteePrep",
    LegalLifePolicyPrepCo = "LegalLifePolicyPrepCo",
    LegalLifePolicyPrepPersonal = "LegalLifePolicyPrepPersonal",
    LegalPriorityPariPassu = "LegalPriorityPariPassu",
    LegalSubordinationAgreement = "LegalSubordinationAgreement",
    DirDebDirectDebitAdmin = "DirDebDirectDebitAdmin",
    DirDebDirectDebitCancel = "DirDebDirectDebitCancel",
    IntlPayBIBForeignLimit = "IntlPayBIBForeignLimit",
    IntlPayCreditTransCust = "IntlPayCreditTransCust",
    IntlPayCreditTransNonCust = "IntlPayCreditTransNonCust",
    IntlPayUrgentPaymentForeign = "IntlPayUrgentPaymentForeign",
    IntlPayExpressMoneyMover = "IntlPayExpressMoneyMover",
    IntlPayEEAPayUrgent = "IntlPayEEAPayUrgent",
    IntlPayIrishPayUrgent = "IntlPayIrishPayUrgent",
    IntlPayEEAPay = "IntlPayEEAPay",
    IntlPayForeignIn1CPlus = "IntlPayForeignIn1CPlus",
    IntlPayForeignPaymentInUKAcc = "IntlPayForeignPaymentInUKAcc",
    IntlPayForeignCharge = "IntlPayForeignCharge",
    IntlPayForeignCancellation = "IntlPayForeignCancellation",
    IntlPayForeignStandardEUEuroBIC = "IntlPayForeignStandardEUEuroBIC",
    IntlPayFXFeeRate = "IntlPayFXFeeRate",
    IntlPayForeignInternet = "IntlPayForeignInternet",
    IntlPayForeign = "IntlPayForeign",
    IntlPayForeignInbound = "IntlPayForeignInbound",
    IntlPayFXPaymentOut = "IntlPayFXPaymentOut",
    IntlPayForeignInSub1C = "IntlPayForeignInSub1C",
    IntlPayFXRate = "IntlPayFXRate",
    IntlPayForeignStandardEUEuroNoBIC = "IntlPayForeignStandardEUEuroNoBIC",
    IntlPayFXPaymentOutIR = "IntlPayFXPaymentOutIR",
    IntlPayFXFee = "IntlPayFXFee",
    IntlPayPurchaseNonSterling = "IntlPayPurchaseNonSterling",
    IntlPayPostPaymentForeign = "IntlPayPostPaymentForeign",
    IntlPayPurchaseRateNonSterling = "IntlPayPurchaseRateNonSterling",
    IntlPayPaymentTracing = "IntlPayPaymentTracing",
    IntlPayStandardMoneyMover = "IntlPayStandardMoneyMover",
    IntlPayMt101Transaction = "IntlPayMT101Transaction",
    IntlPayTransNonSterling = "IntlPayTransNonSterling",
    IntlPayTransRateNonSterling = "IntlPayTransRateNonSterling",
    IntlPayForeignUrgentEUEuroBIC = "IntlPayForeignUrgentEUEuroBIC",
    IntlPayForeignUrgentEUEuroNoBIC = "IntlPayForeignUrgentEUEuroNoBIC",
    IntlPayUrgentPaymentGroup = "IntlPayUrgentPaymentGroup",
    IntlPayUrgentPaymentUK = "IntlPayUrgentPaymentUK",
    IntlPayUSAPayUrgent = "IntlPayUSAPayUrgent",
    IntlPayCurrencyPurchase = "IntlPayCurrencyPurchase",
    IntlPayWorldpayPayment = "IntlPayWorldpayPayment",
    IntlPayCurrencyWithdraw = "IntlPayCurrencyWithdraw",
    InvPayBankDetailsWrong = "InvPayBankDetailsWrong",
    InvPayForeignBCNR = "InvPayForeignBCNR",
    InvPayForeignRecall = "InvPayForeignRecall",
    InvGeneralInq = "InvGeneralInq",
    InvOldInstruction = "InvOldInstruction",
    InvPayPaymentRecall = "InvPayPaymentRecall",
    InvPayReturnDebitXVLess = "InvPayReturnDebitXVLess",
    InvPayReturnDebitXVPlus = "InvPayReturnDebitXVPlus",
    InvPayStopPayment = "InvPayStopPayment",
    InvPayStandingOrdUnpaid = "InvPayStandingOrdUnpaid",
    SafeKeepAccess = "SafeKeepAccess",
    SafeKeepDeedMedium = "SafeKeepDeedMedium",
    SafeKeepingEnvelope = "SafeKeepingEnvelope",
    SafeKeepingInspection = "SafeKeepingInspection",
    SafeKeepingLargeItem = "SafeKeepingLargeItem",
    SafeKeepMultipleItems = "SafeKeepMultipleItems",
    SafeKeepingParcel = "SafeKeepingParcel",
    SafeKeepDeedSmall = "SafeKeepDeedSmall",
    SafeKeepOneItem = "SafeKeepOneItem",
    SafeKeepSafeCustody = "SafeKeepSafeCustody",
    LoanArrangementFeePC = "LoanArrangementFeePC",
    LoanArrangement = "LoanArrangement",
    LoanEarlyRepayment = "LoanEarlyRepayment",
    LoanLatePayment = "LoanLatePayment",
    LoanSMEUnsecuredLoan = "LoanSMEUnsecuredLoan",
    LoanTieredArrangement = "LoanTieredArrangement",
    NightSafeNightSafeBankOpen = "NightSafeNightSafeBankOpen",
    NightSafeCreditSub5K = "NightSafeCreditSub5K",
    NightSafeNightSafe = "NightSafeNightSafe",
    NightSafeNightSafePaidIn = "NightSafeNightSafePaidIn",
    OverdraftAnnualReview = "OverdraftAnnualReview",
    OverdraftTempOverdraft = "OverdraftTempOverdraft",
    OverdraftUnauthorisedBorrowing = "OverdraftUnauthorisedBorrowing",
    POPostOfficeCounterCredit = "POPostOfficeCounterCredit",
    POPostOfficeCashCredit = "POPostOfficeCashCredit",
    POPostOfficeCashOut = "POPostOfficeCashOut",
    POPostOfficeWithdrawal = "POPostOfficeWithdrawal",
    ChqBookTheftLossAllStopped = "ChqBookTheftLossAllStopped",
    ChqIssuedCurrencyAcc = "ChqIssuedCurrencyAcc",
    ChqCopy = "ChqCopy",
    ChqDraft = "ChqDraft",
    ChqIn = "ChqIn",
    ChqDraftSterling = "ChqDraftSterling",
    ChqOutIssued = "ChqOutIssued",
    ChqSpecialChqPresentation = "ChqSpecialChqPresentation",
    ChqCounterCheque = "ChqCounterCheque",
    ChqChequeswithStatement = "ChqChequeswithStatement",
    ChqStopped = "ChqStopped",
    ChqTrans = "ChqTrans",
    ChqDraftFX = "ChqDraftFX",
    ChqForeignCourier = "ChqForeignCourier",
    ChqForeignNegTenThou = "ChqForeignNegTenThou",
    ChqForeignNegHundred = "ChqForeignNegHundred",
    ChequeForeignBankDivi = "ChequeForeignBankDivi",
    ChqForeignNegFiftyThou = "ChqForeignNegFiftyThou",
    ChqPensionCheque = "ChqPensionCheque",
    ChequeForeignOtherDivi = "ChequeForeignOtherDivi",
    ChqForeignNegFiveThou = "ChqForeignNegFiveThou",
    ChqForeignNegMax = "ChqForeignNegMax",
    ChqForeignGBPMMDPlus = "ChqForeignGBPMMDPlus",
    ChqGiftCheque = "ChqGiftCheque",
    ChqCounterLodgement = "ChqCounterLodgement",
    ChqCashDropLodgement = "ChqCashDropLodgement",
    ChqChequePhotocopy = "ChqChequePhotocopy",
    ChqPostOfficeCredit = "ChqPostOfficeCredit",
    ChqPostOfficeChequeCollected = "ChqPostOfficeChequeCollected",
    ChqChequeRetrieval = "ChqChequeRetrieval",
    ChqReconcilliationPerTrans = "ChqReconcilliationPerTrans",
    ChqSpecialPresentationCount = "ChqSpecialPresentationCount",
    ChqSpecialPresentationPTT = "ChqSpecialPresentationPTT",
    ChqUnpaidCharge = "ChqUnpaidCharge",
    ChqUnpaidTransIn = "ChqUnpaidTransIn",
    ChqUnpaidTransOut = "ChqUnpaidTransOut",
    ChqUnpaidCheque = "ChqUnpaidCheque",
    ReportAuditLetter = "ReportAuditLetter",
    ReportFAXAdviceAdditional = "ReportFAXAdviceAdditional",
    ReportTelAdviceAdditional = "ReportTelAdviceAdditional",
    ReportCreditHistory = "ReportCreditHistory",
    ReportCertInterestDuplicate = "ReportCertInterestDuplicate",
    ReportCertInterest = "ReportCertInterest",
    ReportCreditHistoryAdditionalInYear = "ReportCreditHistoryAdditionalInYear",
    ReportForeignStatusEnqElec = "ReportForeignStatusEnqElec",
    ReportForeignStatusEnq = "ReportForeignStatusEnq",
    ReportCashBackorInterestAnal = "ReportCashBackorInterestAnal",
    ReportStatementChqDaily = "ReportStatementChqDaily",
    ReportStatementChqFortnightly = "ReportStatementChqFortnightly",
    ReportStatementChqMonthly = "ReportStatementChqMonthly",
    ReportStatementChqWeekly = "ReportStatementChqWeekly",
    ReportStatementAndDiviChq = "ReportStatementAndDiviChq",
    ReportReference = "ReportReference",
    ReportReferralItem = "ReportReferralItem",
    ReportStatementByATM = "ReportStatementByATM",
    ReportStatementByBranch = "ReportStatementByBranch",
    ReportStatementCopyRegular = "ReportStatementCopyRegular",
    ReportStatusEnquiry = "ReportStatusEnquiry",
    ReportStatementFrequent = "ReportStatementFrequent",
    ReportStatementMonthly = "ReportStatementMonthly",
    ReportStatementCopy1 = "ReportStatementCopy1",
    ReportStatementToBranch = "ReportStatementToBranch",
    ReportSMSTextMiniStatementorAlert = "ReportSMSTextMiniStatementorAlert",
    ReportStatementFortnightly = "ReportStatementFortnightly",
    ReportSMSTextMiniStatementWoM = "ReportSMSTextMiniStatementWoM",
    ReportSMSTextAlertBalance = "ReportSMSTextAlertBalance",
    ReportSMSTextAlert = "ReportSMSTextAlert",
    ReportTaxCert = "ReportTaxCert",
    ReportWeeklyStatement = "ReportWeeklyStatement",
    ReportTextMessageBanking = "ReportTextMessageBanking",
    SEPACancellation = "SEPACancellation",
    SEPABranch = "SEPABranch",
    SEPACredit = "SEPACredit",
    SEPADirectDebit = "SEPADirectDebit",
    SEPAIn = "SEPAIn",
    SEPAEuro = "SEPAEuro",
    SEPAOut = "SEPAOut",
    SEPAUnpaid = "SEPAUnpaid",
    SEPAWinbitsAnnualService = "SEPAWinbitsAnnual Service",
    SEPAWinbitsTransaction = "SEPAWinbitsTransaction",
    TransBillPaymentBranch = "TransBillPaymentBranch",
    TransBillCollect = "TransBillCollect",
    TransTelephoneBillPayment = "TransTelephoneBillPayment",
    TransBankPayment = "TransBankPayment",
    TransBillPaymentTelephone = "TransBillPaymentTelephone",
    TransCorrespondentBankFee = "TransCorrespondentBankFee",
    TransCreditTransferUKDifferent = "TransCreditTransferUKDifferent",
    TransCreditTransferUKSame = "TransCreditTransferUKSame",
    TransCredit = "TransCredit",
    TransCreditTransfer = "TransCreditTransfer",
    TransBranchCredit = "TransBranchCredit",
    TransDebit = "TransDebit",
    TransDebCardDeb = "TransDebCardDeb",
    TransUKDirDeb = "TransUKDirDeb",
    TransManualDeb = "TransManualDeb",
    TransBuyForeignWithGBP = "TransBuyForeignWithGBP",
    TransGoodValueReq = "TransGoodValueReq",
    TransSWIFTOutUKForeign = "TransSWIFTOutUKForeign",
    TransInconpleteInstruction = "TransInconpleteInstruction",
    TransManualEntries = "TransManualEntries",
    TransManualTrans = "TransManualTrans",
    TransNonSterling = "TransNonSterling",
    TransPOSSaleForeign = "TransPOSSaleForeign",
    TransPriPaymentPost = "TransPriPaymentPost",
    TransPOSSaleUK = "TransPOSSaleUK",
    TransReturnPayment = "TransReturnPayment",
    TransReconciliationPerTrans = "TransReconciliationPerTrans",
    TransStandingOrdAdmin = "TransStandingOrdAdmin",
    TransStandingOrd = "TransStandingOrd",
    TransStandingOrdManPay = "TransStandingOrdManPay",
    TransTravellersChqOtherBank = "TransTravellersChqOtherBank",
    TransTelBusiPriPaymentForeignToUKAcc = "TransTelBusiPriPaymentForeignToUKAcc",
    TransTeleItem = "TransTeleItem",
    TransTelBusiPriPaymentToGrpAcc = "TransTelBusiPriPaymentToGrpAcc",
    TransTravellersChqRate = "TransTravellersChqRate",
    TransTransferExGroup = "TransTransferExGroup",
    TransUnauthorisedPaidTrans = "TransUnauthorisedPaidTrans",
    TransUrgentPaymentPostal = "TransUrgentPaymentPostal",
    TransUnpaidTrans = "TransUnpaidTrans",
    TransTelBusiPriPaymentToNonGrpAcc = "TransTelBusiPriPaymentToNonGrpAcc",
    TransSWIFTOutNonEEASterling = "TransSWIFTOutNonEEASterling",
    AutoAutoCredit = "AutoAutoCredit",
    AutoAutomatedEntries = "AutoAutomatedEntries",
    AutoAutoCreditPhoneInet = "AutoAutoCreditPhoneInet",
    AutoAutomatedTrans = "AutoAutomatedTrans",
    AutoDebitCardCommercial = "AutoDebitCardCommercial",
    AutoFPSAutoCredit = "AutoFPSAutoCredit",
    VisaConvertAbroadForeign = "VisaConvertAbroadForeign",
    VisaBureauDeChange = "VisaBureauDeChange",
    VisaTravellersChqorCurrency = "VisaTravellersChqorCurrency",
    OnlineInternetBillPayment = "OnlineInternetBillPayment",
    OnlineBusinessOnlineEuroPayment = "OnlineBusinessOnlineEuroPayment",
    OnlineBusinessOnlineUrgentEuroPayment = "OnlineBusinessOnlineUrgentEuroPayment",
    OnlineBusinessOnlineForeignPayment = "OnlineBusinessOnlineForeignPayment",
    OnlineInterbankTransfer = "OnlineInterbankTransfer",
    OnlineInterbankPerTransfer = "OnlineInterbankPerTransfer",
    OnlineInterbranchTransfer = "OnlineInterbranchTransfer",
    OnlineInterbranchPerTransfer = "OnlineInterbranchPerTransfer",
    OnlineSubscriptionMonthly = "OnlineSubscriptionMonthly",
    OnlineBankingPayment = "OnlineBankingPayment",
    OnlineBankingSubscription = "OnlineBankingSubscription",
    OnlinePOSSale = "OnlinePOSSale",
    OnlinePersonalCustAncillarys = "OnlinePersonalCustAncillarys",
    OnlinePersonalCustService = "OnlinePersonalCustService",
    OnlinePersonalCustOverlimits = "OnlinePersonalCustOverlimits",
    OnlineReplacementCardReader = "OnlineReplacementCardReader",
    OnlinePersonalCustSetUp = "OnlinePersonalCustSetUp",
    OnlinePersonalCustTransaction = "OnlinePersonalCustTransaction",
    OnlinePaymentinGBPtoUK = "OnlinePaymentinGBPtoUK",
    OnlineUrgentPayment = "OnlineUrgentPayment",
    OnlinePaymentinUSDtoUS = "OnlinePaymentinUSDtoUS",
    OnlineBulkDirectDebSterling = "OnlineBulkDirectDebSterling",
    ForeignChqSent = "ForeignChqSent",
    ForeignChqSelf = "ForeignChqSelf",
    ForeignChqEncashment = "ForeignChqEncashment",
    ForeignFXInwardsCust = "ForeignFXInwardsCust",
    ForeignFXTransfersROI = "ForeignFXTransfersROI",
    ForeignFXForwardTrans = "ForeignFXForwardTrans",
    ForeignFXTransfersBOI = "ForeignFXTransfersBOI",
    ForeignExMaintenance = "ForeignExMaintenance",
    ForeignFXInwardsNonCust = "ForeignFXInwardsNonCust",
    ForeignFXOutwards = "ForeignFXOutwards",
    ForeignPurchase = "ForeignPurchase",
    ForeignStatusRep = "ForeignStatusRep",
    ForeignChqDraft = "ForeignChqDraft",
    ForeignChqCLess = "ForeignChqCLess",
    ForeignChqMLess = "ForeignChqMLess",
    ForeignChqOther = "ForeignChqOther",
    ForeignChqMPlus = "ForeignChqMPlus",
    ForeignChqCCC = "ForeignChqCCC",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCBalanceHandling = "ServiceCBalanceHandling",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMonitorDaily = "ServiceCMonitorDaily",
    ServiceCManagementFee = "ServiceCManagementFee",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCMonitorMonthly = "ServiceCMonitorMonthly",
    ServiceCMonitorWeekly = "ServiceCMonitorWeekly",
    ServiceCSecurityFee = "ServiceCSecurityFee",
    ServiceCmt940AccountFirst = "ServiceCMT940AccountFirst",
    ServiceCmt940AccountSubsequent = "ServiceCMT940AccountSubsequent",
    ServiceCOther = "ServiceCOther",
    CounterCoinHandling = "CounterCoinHandling",
    CounterCashIn = "CounterCashIn",
    CounterCashInNotUs = "CounterCashInNotUs",
    CounterCashOut = "CounterCashOut",
    CounterCashX = "CounterCashX",
    CounterForeignCashMax = "CounterForeignCashMax",
    CounterForeignNoteHandling = "CounterForeignNoteHandling",
    CounterForeignCashOut = "CounterForeignCashOut",
    CounterCashFeeRate = "CounterCashFeeRate",
    CounterForeignCashOutTx = "CounterForeignCashOutTx",
    CounterCounterLodgement = "CounterCounterLodgement",
    CounterCashDropLodgement = "CounterCashDropLodgement",
    CounterNotesLodged = "CounterNotesLodged",
    CounterNotesOut = "CounterNotesOut",
    CounterCashInOwn = "CounterCashInOwn",
    CounterPaidTrans = "CounterPaidTrans",
    CounterCashFeePercent = "CounterCashFeePercent"
}
/**
 * Fee Detail
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Fee Sub Details
     */
    feeSubDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
    /**
     * A description of the Fee type
     */
    feeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Describe other fee type
     */
    other?: string;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Fee Sub Type code
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fee Details
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
    /**
     * Fee Detail
     */
    feeDetail: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail;
    /**
     * Fee Sub Type code
     */
    feeSubType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}
/**
 * Fees
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    feeDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails[];
    /**
     * Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
     */
    feeHigherTier?: number;
    /**
     * Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range
     */
    feeLowerTier?: number;
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Describes if the offering is promotional or a description of a future state.
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fees And Charges
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges extends SpeakeasyBase {
    /**
     * Fees
     */
    fees: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum;
}
/**
 * Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum {
    AndroidPay = "AndroidPay",
    ApplePay = "ApplePay",
    IssuerMobileApp = "IssuerMobileApp",
    MobileBankingApp = "MobileBankingApp",
    Other = "Other",
    PayM = "PayM",
    SamsungPay = "SamsungPay",
    VodafoneWallet = "VodafoneWallet"
}
/**
 * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIPOCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand extends SpeakeasyBase {
    /**
     * The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
     */
    trademarkID: string;
    /**
     * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
     */
    trademarkIPOCode: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIPOCodeEnum;
}
/**
 * Organisation Name
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    /**
     * Legal Name of the organisation
     */
    legalName: string;
}
/**
 * Parent organisation
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation extends SpeakeasyBase {
    /**
     * The BIC from the organisation
     */
    bic?: string;
    /**
     * The LEI ID of the organisation
     */
    lei?: string;
    /**
     * Organisation Name
     */
    organisationName: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation extends SpeakeasyBase {
    /**
     * Brand
     */
    brand: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand;
    /**
     * Parent organisation
     */
    parentOrganisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation;
}
/**
 * Fee Charge negotiable Indicator
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No",
    Yes = "Yes"
}
/**
 * Frequency with which the rate, or amount is charged
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}
/**
 * Frequency with which the rate, or amount is calculated
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Rate type other than EAR
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
/**
 * Type of fee or charge
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Setup = "Setup",
    Review = "Review",
    Renewal = "Renewal",
    MinimumSetup = "MinimumSetup",
    MaximumSetup = "MaximumSetup",
    Total = "Total",
    Item = "Item",
    EmergencyLending = "EmergencyLending",
    Other = "Other"
}
/**
 * Overdraft Fees Charges
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges extends SpeakeasyBase {
    /**
     * Charge applied to tier
     */
    feeChargeAmount?: string;
    /**
     * Frequency with which the rate, or amount is charged
     */
    feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;
    /**
     * Frequency with which the rate, or amount is calculated
     */
    feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;
    /**
     * Other Code Type
     */
    feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType;
    /**
     * Fee charge rate applied to tier
     */
    feeChargeRate?: string;
    /**
     * Other Code Type
     */
    feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType;
    /**
     * Rate type other than EAR
     */
    feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum;
    /**
     * Type of fee or charge
     */
    feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Describes if the offering is promotional or a description of a future state.
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Defines the arrangement of the overdraft
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged",
    Arranged = "Arranged",
    Other = "Other"
}
/**
 * Frequency with which the rate, or amount is charged
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}
/**
 * Frequency with which the rate, or amount is calculated
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Rate type other than EAR
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
/**
 * Type of fee or charge
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Setup = "Setup",
    Review = "Review",
    Renewal = "Renewal",
    MinimumSetup = "MinimumSetup",
    MaximumSetup = "MaximumSetup",
    Total = "Total",
    Item = "Item",
    EmergencyLending = "EmergencyLending",
    Other = "Other"
}
/**
 * Overdraft Fees Charges
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
    /**
     * Charge applied to tier
     */
    feeChargeAmount?: string;
    /**
     * Frequency with which the rate, or amount is charged
     */
    feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;
    /**
     * Frequency with which the rate, or amount is calculated
     */
    feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;
    /**
     * Other Code Type
     */
    feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;
    /**
     * Fee charge rate applied to tier
     */
    feeChargeRate?: string;
    /**
     * Other Code Type
     */
    feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;
    /**
     * Rate type other than EAR
     */
    feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;
    /**
     * Type of fee or charge
     */
    feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Frequency with which the rate, or amount is charged
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}
/**
 * Frequency with which the rate, or amount is calculated
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Other Code Type
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    /**
     * Code mnemonic for 'Other' code set value applicable to specified attribute
     */
    code?: string;
    /**
     * Description for 'Other' code set value applicable to specified attribute
     */
    description?: string;
    /**
     * Name of 'Other' code set value applicable to specified attribute
     */
    name?: string;
}
/**
 * Rate type other than EAR
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
/**
 * Type of fee or charge
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Setup = "Setup",
    Review = "Review",
    Renewal = "Renewal",
    MinimumSetup = "MinimumSetup",
    MaximumSetup = "MaximumSetup",
    Total = "Total",
    Item = "Item",
    EmergencyLending = "EmergencyLending",
    Other = "Other"
}
/**
 * Overdraft Fees Charges
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
    /**
     * Charge applied to tier
     */
    feeChargeAmount?: string;
    /**
     * Frequency with which the rate, or amount is charged
     */
    feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;
    /**
     * Frequency with which the rate, or amount is calculated
     */
    feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;
    /**
     * Other Code Type
     */
    feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;
    /**
     * Fee charge rate applied to tier
     */
    feeChargeRate?: string;
    /**
     * Other Code Type
     */
    feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;
    /**
     * Rate type other than EAR
     */
    feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;
    /**
     * Type of fee or charge
     */
    feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Tiers
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    /**
     * EAR of the Tier
     */
    ear?: string;
    feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];
    /**
     * Notes on the Overdraft
     */
    notes?: string;
    /**
     * Identification of the tier or band
     */
    tierBandIdentification?: string;
    /**
     * Maximum value of the tier
     */
    tierValueMaximum: string;
    /**
     * Minimum value of the tier
     */
    tierValueMinimum: string;
}
/**
 * Tier Bandset
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet extends SpeakeasyBase {
    /**
     * Other Code Type
     */
    arrangementOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType;
    /**
     * Defines the arrangement of the overdraft
     */
    arrangementType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum;
    /**
     * Amount on overdraft that is prearranged
     */
    bufferAmount?: string;
    /**
     * describes that the tiers and bands are set by the CMA order, as opposed to be set by the banks
     */
    cmaDefinedIndicator: boolean;
    /**
     * EAR of the Overdraft Set
     */
    ear?: string;
    /**
     * Type of fee or charge
     */
    feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges[];
    /**
     * Notes on the Overdraft
     */
    notes?: string;
    overdraftTierBand?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand[];
    /**
     * Identification of the set of tiers or bands
     */
    tierBandSetIdentification?: string;
}
/**
 * Defines if the overdraft facility is committed
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}
/**
 * Overdraft
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Fee Charge negotiable Indicator
     */
    feeChargeNegotiableIndicator?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum;
    feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges[];
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Maximum Monthly Charge (MMC) for Overdraft fee and charges.
     */
    maximumMonthlyOverdraftCharge?: string;
    /**
     * Notes on the overdraft
     */
    notes?: string;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    overdraftProductState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum;
    /**
     * Overdraft Tier Band Set
     */
    overdraftTierBandSet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet[];
    /**
     * Defines if the overdraft facility is committed
     */
    overdraftType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
    /**
     * The duration of the overdraft, if it is non permanent
     */
    term?: string;
}
/**
 * Marketing or industry segment that the product is designed for
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum {
    Basic = "Basic",
    Business = "Business",
    General = "General",
    Graduate = "Graduate",
    International = "International",
    Packaged = "Packaged",
    Personal = "Personal",
    Premium = "Premium",
    Reward = "Reward",
    Sme = "SME",
    Student = "Student",
    YoungAdult = "YoungAdult",
    Youth = "Youth"
}
/**
 * Descriptive code for the product category
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum {
    Bca = "BCA"
}
/**
 * Business current account
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount extends SpeakeasyBase {
    /**
     * Ways to interact with the bank when managing account
     */
    accessChannels: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum[];
    /**
     * Benefit
     */
    benefits: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits;
    caPricing: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCAPricing[];
    /**
     * Optional additional notes to supplement the card details
     */
    cardNotes?: string;
    /**
     * Card Type available
     */
    cardType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum[];
    /**
     * The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum
     */
    cardWithdrawalLimit: string;
    /**
     * Can a chequebook be issued
     */
    chequeBookAvailable: boolean;
    /**
     * Does the card issued have contactless facility
     */
    contactless: boolean;
    /**
     * Credit Interest
     */
    creditInterest: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest;
    /**
     * Indicates whether a credit check performed on an inquiry to open an account is submitted
     */
    creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;
    /**
     * Indicates whether a credit check is used to check the address of a potential new account holder
     */
    creditScoringPartOfAccountOpeningForIDVerification?: boolean;
    creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum[];
    /**
     * Details on the specific credit scoring
     */
    creditScoringPartOfAccountOpeningIDVerificationText?: string[];
    /**
     * Describes the type of credit scoring
     */
    creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];
    /**
     * Details on the specific credit scoring
     */
    creditScoringPartOfAccountOpeningText?: string;
    /**
     * Currency of the Account. Default to GBP at present
     */
    currency: string[];
    /**
     * Eligibility
     */
    eligibility: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility;
    feature?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature[];
    feesAndCharges: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges[];
    /**
     * Indicates that the account supports international payments
     */
    internationalPaymentsSupported: boolean;
    /**
     * The maximum Relevant Charges that could accrue
     */
    maximumMonthlyCharge?: string;
    /**
     * Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
     */
    mobileWallet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum[];
    /**
     * Organisation
     */
    organisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation;
    overdraft?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft[];
    /**
     * Indicates whether an overdraft offered for this account
     */
    overdraftOffered: boolean;
    /**
     * Description of the product provided by the parent organisation
     */
    productDescription: string;
    /**
     * Identifier within the parent organisation for the product. Must be unique in the organisation
     */
    productIdentifier: string;
    /**
     * The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise
     */
    productName?: string;
    productSegment: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum[];
    /**
     * Descriptive code for the product category
     */
    productType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum;
    /**
     * URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL
     */
    productURL: string[];
    /**
     * URL provided by the parent organisation which redirects to the current T&Cs
     */
    tsandCs: string[];
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheAPIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
/**
 * Open Banking License
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
/**
 * Open Banking Terms of Use
 */
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    /**
     * Open Banking License
     */
    license: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    /**
     * Open Banking Terms of Use
     */
    termsOfUse: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
/**
 * Successful response with a list of `Branch Current Account` data
 */
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount[];
    meta: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetBusinessCurrentAccountsResponse extends SpeakeasyBase {
    /**
     * You have sent a request which could not be understood.
     */
    fourHundredErrorObject?: GetBusinessCurrentAccounts400ErrorObject;
    /**
     * Your client has failed to submit a request, and a timeout has occurred.
     */
    fourHundredAndEightErrorObject?: GetBusinessCurrentAccounts408ErrorObject;
    /**
     * You have requested this resource too often. Slow down.
     */
    fourHundredAndTwentyNineErrorObject?: GetBusinessCurrentAccounts429ErrorObject;
    /**
     * An error occurred on the server. No further information is available.
     */
    fiveHundredErrorObject?: GetBusinessCurrentAccounts500ErrorObject;
    /**
     * The service is temporarily unavailable.
     */
    fiveHundredAndThreeErrorObject?: GetBusinessCurrentAccounts503ErrorObject;
    contentType: string;
    /**
     * A standard error response.
     */
    errorObject?: GetBusinessCurrentAccountsErrorObject;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response with a list of `Branch Current Account` data
     */
    getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;
}
