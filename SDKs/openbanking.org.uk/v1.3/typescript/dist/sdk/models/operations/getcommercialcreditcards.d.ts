import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCommercialCreditCardsRequest extends SpeakeasyBase {
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
export declare class GetCommercialCreditCardsErrorObject extends SpeakeasyBase {
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
export declare enum GetCommercialCreditCards503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetCommercialCreditCards503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetCommercialCreditCards503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
/**
 * The service is temporarily unavailable.
 */
export declare class GetCommercialCreditCards503ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards503ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards503ErrorObjectStatusEnum;
    title: GetCommercialCreditCards503ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetCommercialCreditCards500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetCommercialCreditCards500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
/**
 * An error occurred on the server. No further information is available.
 */
export declare class GetCommercialCreditCards500ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards500ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards500ErrorObjectStatusEnum;
    title: GetCommercialCreditCards500ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetCommercialCreditCards429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetCommercialCreditCards429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
/**
 * You have requested this resource too often. Slow down.
 */
export declare class GetCommercialCreditCards429ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards429ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards429ErrorObjectStatusEnum;
    title: GetCommercialCreditCards429ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetCommercialCreditCards408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetCommercialCreditCards408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
/**
 * Your client has failed to submit a request, and a timeout has occurred.
 */
export declare class GetCommercialCreditCards408ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards408ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards408ErrorObjectStatusEnum;
    title: GetCommercialCreditCards408ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetCommercialCreditCards400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetCommercialCreditCards400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
/**
 * You have sent a request which could not be understood.
 */
export declare class GetCommercialCreditCards400ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards400ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards400ErrorObjectStatusEnum;
    title: GetCommercialCreditCards400ErrorObjectTitleEnum;
}
/**
 * Criteria that is required in order to be eligible for the Benefit
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
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
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
    criteriaType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
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
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];
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
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
    /**
     * Benefit Item
     */
    benefitItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
    /**
     * Benefit Subtype Code
     */
    benefitSubType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
    /**
     * Describe  one or more benefits if they exist
     */
    benefit: boolean;
    benefitGroup?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}
/**
 * CCC Subtype Code
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCCSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * The period used to define the specific interest rate for balance transfers
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum {
    Annual = "Annual",
    Monthly = "Monthly"
}
/**
 * Card Scheme Code
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum {
    Cashcard = "Cashcard",
    CreditMastercard = "CreditMastercard",
    CreditVisa = "CreditVisa"
}
/**
 * Repayment frequency
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum {
    Daily = "Daily",
    Flexible = "Flexible",
    Fortnightly = "Fortnightly",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
/**
 * Commercial Credit Card Item
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem extends SpeakeasyBase {
    /**
     * Annual Percentage Rate
     */
    aprRate: string;
    /**
     * The ability to set separate limts on different cards in one account
     */
    abilityToSetIndividualLimits?: boolean;
    /**
     * Describes whether the account have access to an online tool for reprting on expenditure
     */
    accessToOnlineDataReportingTool: boolean;
    /**
     * Allocation rules for repayment
     */
    allocationofRepayment?: string;
    /**
     * Details on annual account fee, such as non payable when there is a turnover above a certain sum
     */
    annualAccountFeeType?: string;
    /**
     * Standard fee on the card
     */
    annualFeeAmount: string;
    /**
     * The period used to define the specific interest rate for balance transfers
     */
    balanceTransferInterestRatePeriod?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum;
    /**
     * Balance transfer rate
     */
    balanceTransferRate?: string;
    /**
     * Card Scheme Code
     */
    cardScheme: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum;
    /**
     * Cash advance rate
     */
    cashAdvanceRate: string;
    /**
     * Describes whether cash withdrawals are allowed
     */
    cashWithdrawalsAllowed: boolean;
    /**
     * Percent of cashback on amount spend
     */
    cashbackPercent?: string;
    /**
     * Percentage fee on convenience cheques
     */
    chequeFeePercent?: string;
    /**
     * Describes whether the card account allow convenience cheques
     */
    convenienceCheque: boolean;
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Describes how many interest free days are given if the card is fully paid at each term
     */
    daysInterestFreeCreditIfPaymentFull: number;
    /**
     * The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder
     */
    exchangeRateAdjustment: string;
    /**
     * Percentage fee on a convenince cheques
     */
    feesOnCheque?: string;
    /**
     * Additional card fee applied to sterling cash withdrawal made abroad
     */
    foreignCashFee?: string;
    /**
     * Additional card fee rate applied to sterling cash withdrawal made abroad
     */
    foreignCashFeeRate?: string;
    /**
     * Additional card fee applied to sterling retail transactions made abroad
     */
    foreignPurchaseFee?: string;
    /**
     * Additional card fee rate applied to sterling retail transactions made abroad
     */
    foreignPurchaseFeeRate?: string;
    /**
     * Amount payable for issuing an emergency card
     */
    issuingEmergencyCardsFees: string;
    /**
     * Describes the length if only a duration is given instead of a date
     */
    lengthPromotionalInDays?: number;
    /**
     * The maximum numbers of cards per account
     */
    maximumNumberOfCardsPermitted?: number;
    /**
     * Minimum £500, maximum subject to status
     */
    minimumCreditLimit: string;
    /**
     * The minimum lending available
     */
    minimumLendingAmount?: string;
    /**
     * Minimum repayment amount
     */
    minimumRepaymentAmount?: string;
    /**
     * Minimum repayment as percentage
     */
    minimumRepaymentPercentage?: string;
    /**
     * An additional fee applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling
     */
    nonSterlingCashFee?: string;
    /**
     * An additional fee rate applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling
     */
    nonSterlingCashFeeRate?: string;
    /**
     * An additional fee applied to certain card retail transactions
     */
    nonSterlingPurchaseFee?: string;
    /**
     * An additional fee rate applied to certain card retail transactions
     */
    nonSterlingPurchaseFeeRate?: string;
    /**
     * A fee applied to all non-Sterling card transactions
     */
    nonSterlingTransactionFee?: string;
    /**
     * A fee rate applied to all non-Sterling card transactions
     */
    nonSterlingTransactionFeeRate?: string;
    /**
     * Fee applicable if the card was credited over its limit
     */
    overLimitFee?: string;
    /**
     * How many days after statement is the payment expected
     */
    paymentDaysAfterStatement: number;
    /**
     * Any payment network fee applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder
     */
    paymentSchemeExchangeFee?: string;
    /**
     * Any payment network fee rate applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder
     */
    paymentSchemeExchangeFeeRate?: string;
    /**
     * The base exchange rate used in settlement of the transaction between issuer and scheme
     */
    paymentSchemeExchangeRate?: string;
    /**
     * Purchase rate
     */
    purchaseRate: string;
    /**
     * Repayment frequency
     */
    repaymentFrequency: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum;
    /**
     * Additional notes
     */
    repaymentNotes?: string;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes whether there is a statement at account level
     */
    statementAtAccountLevel: boolean;
    /**
     * Describes whether there is a statement at card level
     */
    statementAtPersonalLevel: boolean;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
}
/**
 * Commercial Credit Card Group
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails extends SpeakeasyBase {
    /**
     * CCC Subtype Code
     */
    ccSubType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCCSubTypeEnum;
    /**
     * Commercial Credit Card Item
     */
    commercialCreditCardItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem;
}
/**
 * Eligibility type
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
/**
 * The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
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
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
    eligibilityType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
    /**
     * Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
     */
    incomeCondition?: string;
    /**
     * Indicates if eligibility linked to income
     */
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];
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
    minimumIncomeFrequency?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
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
    residencyRestrictedRegion?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
    /**
     * Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
     */
    singleJointIncome?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
    /**
     * Is the product available to operate as a Clubs or Societies account?
     */
    thirdSectorOrganisations: boolean;
}
/**
 * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIPOCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
    /**
     * The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
     */
    trademarkID: string;
    /**
     * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
     */
    trademarkIPOCode: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIPOCodeEnum;
}
/**
 * Organisation Name
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    /**
     * Legal Name of the organisation
     */
    legalName: string;
}
/**
 * Parent organisation
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
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
    organisationName: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
    /**
     * Brand
     */
    brand: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
    /**
     * Parent organisation
     */
    parentOrganisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}
/**
 * Marketing or industry segment that the product is designed for
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
    Cashback = "Cashback",
    Corporate = "Corporate",
    General = "General",
    Reward = "Reward",
    Sme = "SME"
}
/**
 * Descriptive code for the product category
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    CommercialCreditCards = "CommercialCreditCards"
}
/**
 * Commercial Credit Card
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
    /**
     * Benefit
     */
    benefits: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
    /**
     * Product description
     */
    description: string;
    /**
     * Commercial Credit Card Group
     */
    details: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails;
    /**
     * Eligibility
     */
    eligibility: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
    /**
     * Product key features
     */
    keyFeatures: string;
    /**
     * Organisation
     */
    organisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
    /**
     * Additional Features of the card
     */
    otherKeyFeatures?: string;
    /**
     * Indicates whether a payment holiday is possible
     */
    paymentHoliday: boolean;
    /**
     * Detailed description on the payment holiday if available
     */
    paymentHolidayDescription?: string;
    /**
     * Identifier within the parent organisation for the product. Must be unique in the organisation
     */
    productIdentifier: string;
    /**
     * Name of the Commercial Credit Card
     */
    productName: string;
    /**
     * Marketing or industry segment that the product is designed for
     */
    productSegment?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];
    /**
     * Descriptive code for the product category
     */
    productType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;
    /**
     * URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL
     */
    productURL: string[];
    /**
     * URL provided by the parent organisation which redirects to the current T&Cs. Only applies on live products
     */
    tsandCs: string[];
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheAPIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
/**
 * Open Banking License
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
/**
 * Open Banking Terms of Use
 */
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    /**
     * Open Banking License
     */
    license: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    /**
     * Open Banking Terms of Use
     */
    termsOfUse: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
/**
 * Successful response with a list of `Commercial Credit Card` data
 */
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];
    meta: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetCommercialCreditCardsResponse extends SpeakeasyBase {
    /**
     * You have sent a request which could not be understood.
     */
    fourHundredErrorObject?: GetCommercialCreditCards400ErrorObject;
    /**
     * Your client has failed to submit a request, and a timeout has occurred.
     */
    fourHundredAndEightErrorObject?: GetCommercialCreditCards408ErrorObject;
    /**
     * You have requested this resource too often. Slow down.
     */
    fourHundredAndTwentyNineErrorObject?: GetCommercialCreditCards429ErrorObject;
    /**
     * An error occurred on the server. No further information is available.
     */
    fiveHundredErrorObject?: GetCommercialCreditCards500ErrorObject;
    /**
     * The service is temporarily unavailable.
     */
    fiveHundredAndThreeErrorObject?: GetCommercialCreditCards503ErrorObject;
    contentType: string;
    /**
     * A standard error response.
     */
    errorObject?: GetCommercialCreditCardsErrorObject;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response with a list of `Commercial Credit Card` data
     */
    getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson;
}
