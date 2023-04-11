import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUnsecuredSmeLoansRequest extends SpeakeasyBase {
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
export declare class GetUnsecuredSmeLoansErrorObject extends SpeakeasyBase {
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
export declare enum GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetUnsecuredSmeLoans503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetUnsecuredSmeLoans503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
/**
 * The service is temporarily unavailable.
 */
export declare class GetUnsecuredSmeLoans503ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans503ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans503ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetUnsecuredSmeLoans500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetUnsecuredSmeLoans500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
/**
 * An error occurred on the server. No further information is available.
 */
export declare class GetUnsecuredSmeLoans500ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans500ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans500ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetUnsecuredSmeLoans429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetUnsecuredSmeLoans429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
/**
 * You have requested this resource too often. Slow down.
 */
export declare class GetUnsecuredSmeLoans429ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans429ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans429ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetUnsecuredSmeLoans408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetUnsecuredSmeLoans408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
/**
 * Your client has failed to submit a request, and a timeout has occurred.
 */
export declare class GetUnsecuredSmeLoans408ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans408ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans408ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetUnsecuredSmeLoans400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetUnsecuredSmeLoans400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
/**
 * You have sent a request which could not be understood.
 */
export declare class GetUnsecuredSmeLoans400ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans400ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans400ErrorObjectTitleEnum;
}
/**
 * Criteria that is required in order to be eligible for the Benefit
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
    criteriaType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
    /**
     * Benefit Item
     */
    benefitItem: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
    /**
     * Benefit Subtype Code
     */
    benefitSubType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
    /**
     * Describe  one or more benefits if they exist
     */
    benefit: boolean;
    benefitGroup?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum {
    Branch = "Branch",
    MobileBankingApp = "MobileBankingApp",
    Online = "Online",
    Phone = "Phone",
    Post = "Post",
    PostOffice = "PostOffice",
    Text = "Text"
}
/**
 * Eligibility type
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
/**
 * The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
    eligibilityType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
    /**
     * Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
     */
    incomeCondition?: string;
    /**
     * Indicates if eligibility linked to income
     */
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];
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
    minimumIncomeFrequency?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
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
    residencyRestrictedRegion?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
    /**
     * Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
     */
    singleJointIncome?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
    /**
     * Is the product available to operate as a Clubs or Societies account?
     */
    thirdSectorOrganisations: boolean;
}
/**
 * Triggering frequency of the fee
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
    /**
     * Fee in GBP
     */
    feeAmount?: string;
    /**
     * Triggering frequency of the fee
     */
    feeFrequency: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    /**
     * Fee Sub Details
     */
    feeSubDetails: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
    /**
     * A description of the Fee type
     */
    feeType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fee Details
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
    /**
     * Fee Detail
     */
    feeDetail: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;
    /**
     * Fee Sub Type code
     */
    feeSubType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}
/**
 * Fees
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    feeDetails: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fees And Charges
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
    /**
     * Fees
     */
    fees: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}
/**
 * Loan Length Increments
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum {
    OneYear = "1 year",
    TwoYears = "2 years",
    ThreeYears = "3 years",
    FourYears = "4 years",
    FiveYears = "5 years"
}
/**
 * Rate Comparison Type
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}
/**
 * Repayment Frequency Code
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum {
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
 * Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum {
    Pound5000 = "\u00A35000",
    Pound10000 = "\u00A310000",
    Pound15000 = "\u00A315000",
    Pound20000 = "\u00A320000",
    Pound25000 = "\u00A325000",
    Other = "Other",
    TierMaximum = "TierMaximum",
    TierMinimum = "TierMinimum"
}
/**
 * Loan Pricing
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing extends SpeakeasyBase {
    indicativeRate: string;
    /**
     * Loan Length Increments
     */
    loanLengthIncrement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum;
    loanLengthIncrementLower: number;
    loanLengthIncrementUpper: number;
    /**
     * Monetary amount without currency
     */
    loanSizeBandLower: string;
    /**
     * Monetary amount without currency
     */
    loanSizeBandUpper: string;
    negotiable: boolean;
    /**
     * Rate Comparison Type
     */
    rateComparisonType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum;
    repaymentFrequency: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum[];
    /**
     * Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value
     */
    sizeIncrement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum;
}
/**
 * Describes if the offering is promotional or a description of a future state.
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Loan Item
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem extends SpeakeasyBase {
    ccaRegulatedEntity: boolean;
    /**
     * Date of the change if it refers to future terms
     */
    dateOfChange?: string;
    isALowInterestRepaymentStartPossible: boolean;
    isThisAnInterestOnlyLoan: boolean;
    /**
     * Describes the length if only a duration is given instead of a date in days
     */
    lengthPromotionalInDays?: number;
    loanPricing?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing[];
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    productState: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum;
    /**
     * Describes the start date
     */
    startPromotionOrFutureTerms?: string;
    /**
     * Describes the end date
     */
    stopPromotionOrFutureTerms?: string;
    willTheLoanBePaidInTrancheDrawdowns: boolean;
}
/**
 * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIPOCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
    /**
     * The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
     */
    trademarkID: string;
    /**
     * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
     */
    trademarkIPOCode: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIPOCodeEnum;
}
/**
 * Organisation Name
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    /**
     * Legal Name of the organisation
     */
    legalName: string;
}
/**
 * Parent organisation
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
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
    organisationName: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
    /**
     * Brand
     */
    brand: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
    /**
     * Parent organisation
     */
    parentOrganisation: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}
/**
 * Marketing or industry segment that the product is applicable for. Gives the sector or segment that the Loan is designed for
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
    AgricultureSector = "AgricultureSector",
    AllSegmentsCorporate = "AllSegmentsCorporate",
    Corporate = "Corporate",
    FixedGroup = "FixedGroup",
    FlexibleBusinessLoan = "FlexibleBusinessLoan",
    GovernmentScheme = "GovernmentScheme",
    NewCustomersOnly = "NewCustomersOnly",
    SmallLoan = "SmallLoan",
    SpecialisedSector = "SpecialisedSector",
    SwitchersOnly = "SwitchersOnly"
}
/**
 * Descriptive code for the product category
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum {
    FlexibleBusinessLoan = "FlexibleBusinessLoan",
    SmallBusinessLoan = "SmallBusinessLoan",
    SmeUnsecuredLoan = "SmeUnsecuredLoan"
}
/**
 * SME Loan
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
    /**
     * Arrears treatment
     */
    arrearsTreatment?: string;
    /**
     * Benefit
     */
    benefits: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
    /**
     * Currency of the Account. Default to GBP at present
     */
    currency: string[];
    /**
     * Ways to interact with the bank
     */
    customerAccessChannels: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum[];
    /**
     * Eligibility
     */
    eligibility: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
    feesAndCharges: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];
    loanItem: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem[];
    /**
     * Maximum loan amount
     */
    maximumLoanAmount: string;
    /**
     * Maximum loan term (Days)
     */
    maximumLoanTerm: number;
    /**
     * Minimum loan amount
     */
    minimumLoanAmount: string;
    /**
     * Minimum term (Days)
     */
    minimumLoanTerm: number;
    /**
     * Organisation
     */
    organisation: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
    /**
     * Indicates whether a repayment holiday is allowed
     */
    paymentHoliday: boolean;
    /**
     * Description of the product provided by the parent Organisation
     */
    productDescription: string;
    /**
     * Identifier within the parent organisation for the product. Must be unique in the organisation
     */
    productIdentifier: string;
    /**
     * The short product or marketing name assigned by the parent organisation
     */
    productName: string;
    productSegment: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];
    /**
     * Descriptive code for the product category
     */
    productTypeName: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum;
    productURL: string[];
    /**
     * URL provided by the parent organisation which redirects to the T&Cs
     */
    tsandCs: string[];
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheAPIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
/**
 * Open Banking License
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
/**
 * Open Banking Terms of Use
 */
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    /**
     * Open Banking License
     */
    license: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    /**
     * Open Banking Terms of Use
     */
    termsOfUse: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
/**
 * Successful response with a list of `Unsecured SME Lending` data
 */
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];
    meta: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetUnsecuredSmeLoansResponse extends SpeakeasyBase {
    /**
     * You have sent a request which could not be understood.
     */
    fourHundredErrorObject?: GetUnsecuredSmeLoans400ErrorObject;
    /**
     * Your client has failed to submit a request, and a timeout has occurred.
     */
    fourHundredAndEightErrorObject?: GetUnsecuredSmeLoans408ErrorObject;
    /**
     * You have requested this resource too often. Slow down.
     */
    fourHundredAndTwentyNineErrorObject?: GetUnsecuredSmeLoans429ErrorObject;
    /**
     * An error occurred on the server. No further information is available.
     */
    fiveHundredErrorObject?: GetUnsecuredSmeLoans500ErrorObject;
    /**
     * The service is temporarily unavailable.
     */
    fiveHundredAndThreeErrorObject?: GetUnsecuredSmeLoans503ErrorObject;
    contentType: string;
    /**
     * A standard error response.
     */
    errorObject?: GetUnsecuredSmeLoansErrorObject;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response with a list of `Unsecured SME Lending` data
     */
    getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson;
}
