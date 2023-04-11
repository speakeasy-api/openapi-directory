import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBranchesRequest extends SpeakeasyBase {
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
export declare class GetBranchesErrorObject extends SpeakeasyBase {
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
export declare enum GetBranches503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetBranches503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetBranches503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
/**
 * The service is temporarily unavailable.
 */
export declare class GetBranches503ErrorObject extends SpeakeasyBase {
    description: GetBranches503ErrorObjectDescriptionEnum;
    status: GetBranches503ErrorObjectStatusEnum;
    title: GetBranches503ErrorObjectTitleEnum;
}
export declare enum GetBranches500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetBranches500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetBranches500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
/**
 * An error occurred on the server. No further information is available.
 */
export declare class GetBranches500ErrorObject extends SpeakeasyBase {
    description: GetBranches500ErrorObjectDescriptionEnum;
    status: GetBranches500ErrorObjectStatusEnum;
    title: GetBranches500ErrorObjectTitleEnum;
}
export declare enum GetBranches429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetBranches429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetBranches429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
/**
 * You have requested this resource too often. Slow down.
 */
export declare class GetBranches429ErrorObject extends SpeakeasyBase {
    description: GetBranches429ErrorObjectDescriptionEnum;
    status: GetBranches429ErrorObjectStatusEnum;
    title: GetBranches429ErrorObjectTitleEnum;
}
export declare enum GetBranches408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetBranches408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetBranches408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
/**
 * Your client has failed to submit a request, and a timeout has occurred.
 */
export declare class GetBranches408ErrorObject extends SpeakeasyBase {
    description: GetBranches408ErrorObjectDescriptionEnum;
    status: GetBranches408ErrorObjectStatusEnum;
    title: GetBranches408ErrorObjectTitleEnum;
}
export declare enum GetBranches400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetBranches400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetBranches400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
/**
 * You have sent a request which could not be understood.
 */
export declare class GetBranches400ErrorObject extends SpeakeasyBase {
    description: GetBranches400ErrorObjectDescriptionEnum;
    status: GetBranches400ErrorObjectStatusEnum;
    title: GetBranches400ErrorObjectTitleEnum;
}
/**
 * Information about the accessibility
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum {
    AudioCashMachine = "AudioCashMachine",
    AutomaticDoors = "AutomaticDoors",
    ChairAccess = "ChairAccess",
    DriveThru = "DriveThru",
    ExternalRamp = "ExternalRamp",
    InductionLoop = "InductionLoop",
    InternalRamp = "InternalRamp",
    LevelAccess = "LevelAccess",
    LowerLevelCounter = "LowerLevelCounter",
    WheelchairAccess = "WheelchairAccess"
}
/**
 * Postal Address
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress extends SpeakeasyBase {
    /**
     * Number or Name that identifies the position of a building on a street
     */
    buildingNumberOrName?: string;
    /**
     * Nation with its own government
     */
    country: string;
    /**
     * Identifies a subdivision of a country such as state, region, county
     */
    countrySubDivision?: string;
    /**
     * Directions for customers
     */
    optionalAddressField?: string;
    /**
     * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail
     */
    postCode?: string;
    /**
     * Name of a street or thoroughfare
     */
    streetName?: string;
    /**
     * Name of a built-up area, with defined boundaries, and a local government
     */
    townName?: string;
}
/**
 * Alternative Phone Number
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone extends SpeakeasyBase {
    /**
     * Collection of information that identifies a phone number, as defined by telecom services.
     */
    alternateTelephoneNumber?: string;
    /**
     * Description of the telephone number
     */
    alternateTelephoneNumberDescription?: string;
}
/**
 * Information about branch facilities
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum {
    BusinessITSupport = "BusinessITSupport",
    CollectionLockers = "CollectionLockers",
    MeetingRooms = "MeetingRooms",
    Parking = "Parking",
    Wifi = "Wifi"
}
/**
 * Information about mediated branch facilities
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum {
    BureauDeChange = "BureauDeChange",
    BusinessCounter = "BusinessCounter",
    CardIssuanceFacility = "CardIssuanceFacility",
    CounterServices = "CounterServices",
    DriveThru = "DriveThru",
    MortgageAdvisor = "MortgageAdvisor",
    NightSafe = "NightSafe",
    OnDemandCurrency = "OnDemandCurrency",
    PremierCounter = "PremierCounter",
    VideoBanking = "VideoBanking",
    WheelChairAccess = "WheelChairAccess"
}
/**
 * Information about self service branch services
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum {
    AccountVerificationService = "AccountVerificationService",
    AssistedServiceCounter = "AssistedServiceCounter",
    BusinessDepositTerminal = "BusinessDepositTerminal",
    CashChequeDepositMachineCoin = "CashChequeDepositMachineCoin",
    CashChequeDepositMachineNoCoin = "CashChequeDepositMachineNoCoin",
    ExternalAtmAudio = "ExternalAtmAudio",
    ExternalAtmNoAudio = "ExternalAtmNoAudio",
    ExternalQuickServicePoint = "ExternalQuickServicePoint",
    InternalAtmAudio = "InternalAtmAudio",
    InternalAtmNoAudio = "InternalAtmNoAudio",
    InternalQuickServicePoint = "InternalQuickServicePoint",
    LodgementDevice = "LodgementDevice",
    OnlineBankingPoint = "OnlineBankingPoint",
    QuickDeposit = "QuickDeposit",
    SaturdayCounterService = "SaturdayCounterService",
    SelfServiceAccountOpening = "SelfServiceAccountOpening",
    StatementPrinter = "StatementPrinter"
}
/**
 * Information on the type of branch
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum {
    Physical = "Physical",
    Mobile = "Mobile"
}
/**
 * Customer segment which the branch is able to service
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum {
    Business = "Business",
    Corporate = "Corporate",
    Personal = "Personal",
    Premier = "Premier",
    Private = "Private",
    Select = "Select",
    Sme = "SME",
    Wealth = "Wealth"
}
/**
 * Geographic Coordinates
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation extends SpeakeasyBase {
    /**
     * The Latitude measured in decimal format according to ISO 213
     */
    latitude: string;
    /**
     * The longitude measured in decimal format according to ISO 213
     */
    longitude: string;
}
/**
 * Day of the week
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
    PublicAndBankHoliday = "Public and Bank Holiday"
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes extends SpeakeasyBase {
    /**
     * ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
     */
    closingTime: string;
    /**
     * Day of the week
     */
    openingDay: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum;
    /**
     * ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
     */
    openingTime: string;
    /**
     * ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
     */
    unavailableFinishTime?: string;
    /**
     * ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
     */
    unavailableStartTime?: string;
}
/**
 * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIPOCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand extends SpeakeasyBase {
    /**
     * The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
     */
    trademarkID: string;
    /**
     * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
     */
    trademarkIPOCode: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIPOCodeEnum;
}
/**
 * Organisation Name
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    /**
     * Legal Name of the organisation
     */
    legalName: string;
}
/**
 * Parent organisation
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation extends SpeakeasyBase {
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
    organisationName: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation extends SpeakeasyBase {
    /**
     * Brand
     */
    brand: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand;
    /**
     * Parent organisation
     */
    parentOrganisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation;
}
/**
 * Planned branch closure
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure extends SpeakeasyBase {
    /**
     * Date when a branch is due to re-open following temporary closure
     */
    endDate?: string;
    /**
     * Date when a branch is due to close temporarily or permanently
     */
    startDate?: string;
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch extends SpeakeasyBase {
    /**
     * Indicated whether an ATM is at the branch
     */
    atmAtBranch: boolean;
    /**
     * Information about the accessibility
     */
    accessibilityTypes?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum;
    /**
     * Postal Address
     */
    address: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress;
    alternatePhone?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone[];
    /**
     * Time that the mobile branch is scheduled to arrive
     */
    arrivalTime?: string;
    /**
     * Description of the branch
     */
    branchDescription?: string;
    /**
     * Information about branch facilities
     */
    branchFacilitiesName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum[];
    /**
     * Unique and unambiguous identification of a retail branch of a financial institution
     */
    branchIdentification: string;
    /**
     * Information about mediated branch facilities
     */
    branchMediatedServiceName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum[];
    /**
     * Name by which a party is known and which is usually used to identify that party
     */
    branchName?: string;
    /**
     * Any other facilities not mentioned in BranchFacilitiesName
     */
    branchOtherFacilities?: string[];
    /**
     * Mediated Services not described in BranchMediatedServiceName
     */
    branchOtherMediatedServices?: string[];
    /**
     * Self Services not described in BranchSelfServeServiceName
     */
    branchOtherSelfServices?: string[];
    /**
     * Image related to the branch
     */
    branchPhoto?: string;
    branchSelfServeServiceName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum[];
    /**
     * Information on the type of branch
     */
    branchType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum;
    /**
     * Customer segment which the branch is able to service
     */
    customerSegment: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum[];
    /**
     * Description on when the mobile branch is available. e.g. The weekend of Glastonbury festival; or Mondays and during the shrimp season also Wednesdays
     */
    daysOfTheWeek?: string;
    /**
     * Time that the mobile branch is scheduled to depart
     */
    departureTime?: string;
    /**
     * Collection of information that identifies a FAX number, as defined by telecom services.
     */
    faxNumber?: string[];
    /**
     * Geographic Coordinates
     */
    geographicLocation?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation;
    /**
     * Branch Opening Times
     */
    openingTimes: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes[];
    /**
     * Organisation
     */
    organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation;
    /**
     * Place where the mobile branch is located, such as between the news agent and the church.
     */
    parkingLocation?: string;
    plannedBranchClosure?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure[];
    /**
     * Name of the stop of the mobile branch
     */
    stopName?: string;
    /**
     * Collection of information that identifies a phone number, as defined by telecom services.
     */
    telephoneNumber: string;
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheAPIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
/**
 * Open Banking License
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
/**
 * Open Banking Terms of Use
 */
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    /**
     * Open Banking License
     */
    license: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    /**
     * Open Banking Terms of Use
     */
    termsOfUse: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
/**
 * Successful response with a list of `Branch` data
 */
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch[];
    meta: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetBranchesResponse extends SpeakeasyBase {
    /**
     * You have sent a request which could not be understood.
     */
    fourHundredErrorObject?: GetBranches400ErrorObject;
    /**
     * Your client has failed to submit a request, and a timeout has occurred.
     */
    fourHundredAndEightErrorObject?: GetBranches408ErrorObject;
    /**
     * You have requested this resource too often. Slow down.
     */
    fourHundredAndTwentyNineErrorObject?: GetBranches429ErrorObject;
    /**
     * An error occurred on the server. No further information is available.
     */
    fiveHundredErrorObject?: GetBranches500ErrorObject;
    /**
     * The service is temporarily unavailable.
     */
    fiveHundredAndThreeErrorObject?: GetBranches503ErrorObject;
    contentType: string;
    /**
     * A standard error response.
     */
    errorObject?: GetBranchesErrorObject;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response with a list of `Branch` data
     */
    getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson;
}
