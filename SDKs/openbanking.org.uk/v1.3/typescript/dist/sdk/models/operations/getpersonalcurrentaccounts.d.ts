import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPersonalCurrentAccountsRequest extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccountsErrorObject extends SpeakeasyBase {
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
export declare enum GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetPersonalCurrentAccounts503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetPersonalCurrentAccounts503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
/**
 * The service is temporarily unavailable.
 */
export declare class GetPersonalCurrentAccounts503ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts503ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts503ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetPersonalCurrentAccounts500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetPersonalCurrentAccounts500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
/**
 * An error occurred on the server. No further information is available.
 */
export declare class GetPersonalCurrentAccounts500ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts500ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts500ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetPersonalCurrentAccounts429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetPersonalCurrentAccounts429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
/**
 * You have requested this resource too often. Slow down.
 */
export declare class GetPersonalCurrentAccounts429ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts429ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts429ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetPersonalCurrentAccounts408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetPersonalCurrentAccounts408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
/**
 * Your client has failed to submit a request, and a timeout has occurred.
 */
export declare class GetPersonalCurrentAccounts408ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts408ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts408ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetPersonalCurrentAccounts400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetPersonalCurrentAccounts400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
/**
 * You have sent a request which could not be understood.
 */
export declare class GetPersonalCurrentAccounts400ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts400ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts400ErrorObjectTitleEnum;
}
/**
 * Channel
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
    criteriaType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
    /**
     * Benefit Item
     */
    benefitItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
    /**
     * Benefit Subtype Code
     */
    benefitSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
    /**
     * Describe  one or more benefits if they exist
     */
    benefit: boolean;
    benefitGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}
/**
 * Card Pricing
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCAPricingCAPricingItem extends SpeakeasyBase {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCAPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Card Price
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCAPricing extends SpeakeasyBase {
    /**
     * Card Pricing
     */
    caPricingItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCAPricingCAPricingItem;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCAPricingProductStateEnum;
}
/**
 * Indicates the card scheme
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * Credit Interest Payment Rate Type
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}
/**
 * Rate Comparison Type
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}
/**
 * Credit Interest Tiers
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
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
    rateComparisonType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound",
    PayAway = "PayAway",
    SelfCredit = "SelfCredit",
    SimpleInterest = "SimpleInterest"
}
/**
 * Credit Interest item
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
    /**
     * How often is interest applied to account
     */
    calculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;
    /**
     * Method for interest calculation
     */
    calculationMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;
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
    interestRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;
    interestTiers?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Credit Interest Payment Method Code
     */
    paymentMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Credit Interest Group
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup extends SpeakeasyBase {
    /**
     * Credit Interest item
     */
    creditInterestItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem;
    /**
     * Describes if the offering is promotional, regular or a description of a future state
     */
    interestTierSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}
/**
 * Credit Interest
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest extends SpeakeasyBase {
    /**
     * Is credit paid to the account. The answer will be the condition of all other fields to be filled
     */
    creditCharged: boolean;
    creditInterestGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup[];
}
/**
 * Indicates the type of scoring
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
/**
 * Indicates the type of scoring
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
/**
 * Eligibility type
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
/**
 * The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
    eligibilityType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
    /**
     * Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
     */
    incomeCondition?: string;
    /**
     * Indicates if eligibility linked to income
     */
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];
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
    minimumIncomeFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
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
    residencyRestrictedRegion?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
    /**
     * Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
     */
    singleJointIncome?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
    /**
     * Is the product available to operate as a Clubs or Societies account?
     */
    thirdSectorOrganisations: boolean;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Feature Details
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails extends SpeakeasyBase {
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
    featureSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Account Features
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature extends SpeakeasyBase {
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
    featureDetails?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails[];
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
    /**
     * Fee in GBP
     */
    feeAmount?: string;
    /**
     * Triggering frequency of the fee
     */
    feeFrequency: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Fee Sub Details
     */
    feeSubDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
    /**
     * A description of the Fee type
     */
    feeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fee Details
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
    /**
     * Fee Detail
     */
    feeDetail: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;
    /**
     * Fee Sub Type code
     */
    feeSubType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}
/**
 * Fees
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    feeDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fees And Charges
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
    /**
     * Fees
     */
    fees: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}
/**
 * Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIPOCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
    /**
     * The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
     */
    trademarkID: string;
    /**
     * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
     */
    trademarkIPOCode: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIPOCodeEnum;
}
/**
 * Organisation Name
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    /**
     * Legal Name of the organisation
     */
    legalName: string;
}
/**
 * Parent organisation
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
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
    organisationName: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
    /**
     * Brand
     */
    brand: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
    /**
     * Parent organisation
     */
    parentOrganisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}
/**
 * Fee Charge negotiable Indicator
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No",
    Yes = "Yes"
}
/**
 * Frequency with which the rate, or amount is charged
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
/**
 * Type of fee or charge
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges extends SpeakeasyBase {
    /**
     * Charge applied to tier
     */
    feeChargeAmount?: string;
    /**
     * Frequency with which the rate, or amount is charged
     */
    feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;
    /**
     * Frequency with which the rate, or amount is calculated
     */
    feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;
    /**
     * Other Code Type
     */
    feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType;
    /**
     * Fee charge rate applied to tier
     */
    feeChargeRate?: string;
    /**
     * Other Code Type
     */
    feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType;
    /**
     * Rate type other than EAR
     */
    feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum;
    /**
     * Type of fee or charge
     */
    feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Describes if the offering is promotional or a description of a future state.
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Other Code Type
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged",
    Arranged = "Arranged",
    Other = "Other"
}
/**
 * Frequency with which the rate, or amount is charged
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
/**
 * Type of fee or charge
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
    /**
     * Charge applied to tier
     */
    feeChargeAmount?: string;
    /**
     * Frequency with which the rate, or amount is charged
     */
    feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;
    /**
     * Frequency with which the rate, or amount is calculated
     */
    feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;
    /**
     * Other Code Type
     */
    feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;
    /**
     * Fee charge rate applied to tier
     */
    feeChargeRate?: string;
    /**
     * Other Code Type
     */
    feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;
    /**
     * Rate type other than EAR
     */
    feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;
    /**
     * Type of fee or charge
     */
    feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Frequency with which the rate, or amount is charged
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
/**
 * Type of fee or charge
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
    /**
     * Charge applied to tier
     */
    feeChargeAmount?: string;
    /**
     * Frequency with which the rate, or amount is charged
     */
    feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;
    /**
     * Frequency with which the rate, or amount is calculated
     */
    feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;
    /**
     * Other Code Type
     */
    feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;
    /**
     * Other Code Type
     */
    feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;
    /**
     * Fee charge rate applied to tier
     */
    feeChargeRate?: string;
    /**
     * Other Code Type
     */
    feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;
    /**
     * Rate type other than EAR
     */
    feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;
    /**
     * Type of fee or charge
     */
    feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Tiers
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    /**
     * EAR of the Tier
     */
    ear?: string;
    feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet extends SpeakeasyBase {
    /**
     * Other Code Type
     */
    arrangementOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType;
    /**
     * Defines the arrangement of the overdraft
     */
    arrangementType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum;
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
    feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges[];
    /**
     * Notes on the Overdraft
     */
    notes?: string;
    overdraftTierBand?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand[];
    /**
     * Identification of the set of tiers or bands
     */
    tierBandSetIdentification?: string;
}
/**
 * Defines if the overdraft facility is committed
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}
/**
 * Overdraft
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Fee Charge negotiable Indicator
     */
    feeChargeNegotiableIndicator?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum;
    feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges[];
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
    overdraftProductState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum;
    /**
     * Overdraft Tier Band Set
     */
    overdraftTierBandSet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet[];
    /**
     * Defines if the overdraft facility is committed
     */
    overdraftType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum;
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    Pca = "PCA"
}
/**
 * Personal Current Account
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
    /**
     * Ways to interact with the bank when managing account
     */
    accessChannels: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum[];
    /**
     * Benefit
     */
    benefits: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
    caPricing: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCAPricing[];
    /**
     * Optional additional notes to supplement the card details
     */
    cardNotes?: string;
    /**
     * Card Type available
     */
    cardType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum[];
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
    creditInterest: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest;
    /**
     * Indicates whether a credit check performed on an inquiry to open an account is submitted
     */
    creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;
    /**
     * Indicates whether a credit check is used to check the address of a potential new account holder
     */
    creditScoringPartOfAccountOpeningForIDVerification?: boolean;
    creditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum[];
    /**
     * Details on the specific credit scoring
     */
    creditScoringPartOfAccountOpeningIDVerificationText?: string[];
    /**
     * Describes the type of credit scoring
     */
    creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];
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
    eligibility: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
    feature?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature[];
    feesAndCharges: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];
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
    mobileWallet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum[];
    /**
     * Organisation
     */
    organisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
    overdraft?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft[];
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
    productSegment: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];
    /**
     * Descriptive code for the product category
     */
    productType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;
    /**
     * URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL
     */
    productURL: string[];
    /**
     * URL provided by the parent organisation which redirects to the current T&Cs
     */
    tsandCs: string[];
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheAPIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
/**
 * Open Banking License
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
/**
 * Open Banking Terms of Use
 */
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    /**
     * Open Banking License
     */
    license: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    /**
     * Open Banking Terms of Use
     */
    termsOfUse: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
/**
 * Successful response with a list of `Personal Current Account` data
 */
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];
    meta: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetPersonalCurrentAccountsResponse extends SpeakeasyBase {
    /**
     * You have sent a request which could not be understood.
     */
    fourHundredErrorObject?: GetPersonalCurrentAccounts400ErrorObject;
    /**
     * Your client has failed to submit a request, and a timeout has occurred.
     */
    fourHundredAndEightErrorObject?: GetPersonalCurrentAccounts408ErrorObject;
    /**
     * You have requested this resource too often. Slow down.
     */
    fourHundredAndTwentyNineErrorObject?: GetPersonalCurrentAccounts429ErrorObject;
    /**
     * An error occurred on the server. No further information is available.
     */
    fiveHundredErrorObject?: GetPersonalCurrentAccounts500ErrorObject;
    /**
     * The service is temporarily unavailable.
     */
    fiveHundredAndThreeErrorObject?: GetPersonalCurrentAccounts503ErrorObject;
    contentType: string;
    /**
     * A standard error response.
     */
    errorObject?: GetPersonalCurrentAccountsErrorObject;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response with a list of `Personal Current Account` data
     */
    getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;
}
