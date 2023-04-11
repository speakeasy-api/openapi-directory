import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAtmsRequest extends SpeakeasyBase {
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
export declare class GetAtmsErrorObject extends SpeakeasyBase {
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
export declare enum GetAtms503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetAtms503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetAtms503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
/**
 * The service is temporarily unavailable.
 */
export declare class GetAtms503ErrorObject extends SpeakeasyBase {
    description: GetAtms503ErrorObjectDescriptionEnum;
    status: GetAtms503ErrorObjectStatusEnum;
    title: GetAtms503ErrorObjectTitleEnum;
}
export declare enum GetAtms500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetAtms500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetAtms500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
/**
 * An error occurred on the server. No further information is available.
 */
export declare class GetAtms500ErrorObject extends SpeakeasyBase {
    description: GetAtms500ErrorObjectDescriptionEnum;
    status: GetAtms500ErrorObjectStatusEnum;
    title: GetAtms500ErrorObjectTitleEnum;
}
export declare enum GetAtms429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetAtms429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetAtms429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
/**
 * You have requested this resource too often. Slow down.
 */
export declare class GetAtms429ErrorObject extends SpeakeasyBase {
    description: GetAtms429ErrorObjectDescriptionEnum;
    status: GetAtms429ErrorObjectStatusEnum;
    title: GetAtms429ErrorObjectTitleEnum;
}
export declare enum GetAtms408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetAtms408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetAtms408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
/**
 * Your client has failed to submit a request, and a timeout has occurred.
 */
export declare class GetAtms408ErrorObject extends SpeakeasyBase {
    description: GetAtms408ErrorObjectDescriptionEnum;
    status: GetAtms408ErrorObjectStatusEnum;
    title: GetAtms408ErrorObjectTitleEnum;
}
export declare enum GetAtms400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetAtms400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetAtms400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
/**
 * You have sent a request which could not be understood.
 */
export declare class GetAtms400ErrorObject extends SpeakeasyBase {
    description: GetAtms400ErrorObjectDescriptionEnum;
    status: GetAtms400ErrorObjectStatusEnum;
    title: GetAtms400ErrorObjectTitleEnum;
}
/**
 * Information about ATM services
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMATMServicesEnum {
    Balance = "Balance",
    BillPayments = "BillPayments",
    CashDeposits = "CashDeposits",
    CashWithdrawal = "CashWithdrawal",
    CharityDonation = "CharityDonation",
    ChequeBookRequest = "ChequeBookRequest",
    ChequeDeposits = "ChequeDeposits",
    FastCash = "FastCash",
    MiniStatement = "MiniStatement",
    MobileBankingRegistration = "MobileBankingRegistration",
    MobilePaymentRegistration = "MobilePaymentRegistration",
    MobilePhoneTopUp = "MobilePhoneTopUp",
    OrderStatement = "OrderStatement",
    PINActivation = "PINActivation",
    PINChange = "PINChange"
}
/**
 * Information about the accessibility
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMAccessibilityTypesEnum {
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
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMAddress extends SpeakeasyBase {
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
    postCode: string;
    /**
     * Name of a street or thoroughfare
     */
    streetName: string;
    /**
     * Name of a built-up area, with defined boundaries, and a local government
     */
    townName?: string;
}
/**
 * Geographic Coordinates
 */
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMGeographicLocation extends SpeakeasyBase {
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
 * Indicates the environment of the ATM
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMLocationCategoryEnum {
    Airport = "Airport",
    BankSpecialisedOutlet = "BankSpecialisedOutlet",
    BranchExternal = "BranchExternal",
    BranchInternal = "BranchInternal",
    BranchLobby = "BranchLobby",
    BureauDeChange = "BureauDeChange",
    CoachStation = "CoachStation",
    CommercialSpaceInternal = "CommercialSpaceInternal",
    ConvenienceStore = "ConvenienceStore",
    ExhibitionCentre = "ExhibitionCentre",
    FactoryOrOffice = "FactoryOrOffice",
    FillingStation = "FillingStation",
    FinancialInstitution = "FinancialInstitution",
    GovernmentOffice = "GovernmentOffice",
    Hospital = "Hospital",
    Hotel = "Hotel",
    KioskPod = "KioskPod",
    LeisureCentre = "LeisureCentre",
    PleasurePark = "PleasurePark",
    PublicHouse = "PublicHouse",
    RailwayStation = "RailwayStation",
    RemoteUnit = "RemoteUnit",
    RetailerDepartmentStore = "RetailerDepartmentStore",
    RetailerOutlet = "RetailerOutlet",
    SeaportTerminal = "SeaportTerminal",
    ServiceStation = "ServiceStation",
    ShoppingCentreExternal = "ShoppingCentreExternal",
    ShoppingCentreInternal = "ShoppingCentreInternal",
    StorageDepot = "StorageDepot",
    SupermarketExternal = "SupermarketExternal",
    SupermarketInternal = "SupermarketInternal",
    UndergroundRailwayStation = "UndergroundRailwayStation",
    UniversityOrCollege = "UniversityOrCollege"
}
/**
 * Minimum currency denominations usually available
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMMinimumValueDispensedEnum {
    Pound5 = "\u00A35",
    Pound10 = "\u00A310",
    Pound20 = "\u00A320",
    Pound50 = "\u00A350",
    Pound100 = "\u00A3100"
}
/**
 * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationBrandTrademarkIPOCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
 */
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationBrand extends SpeakeasyBase {
    /**
     * The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
     */
    trademarkID: string;
    /**
     * The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
     */
    trademarkIPOCode: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationBrandTrademarkIPOCodeEnum;
}
/**
 * Organisation Name
 */
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    /**
     * Legal Name of the organisation
     */
    legalName: string;
}
/**
 * Parent organisation
 */
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationParentOrganisation extends SpeakeasyBase {
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
    organisationName: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
 */
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisation extends SpeakeasyBase {
    /**
     * Brand
     */
    brand: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationBrand;
    /**
     * Parent organisation
     */
    parentOrganisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisationParentOrganisation;
}
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATM extends SpeakeasyBase {
    /**
     * ATM terminal device identification for the acquirer and the issuer
     */
    atmid: string;
    /**
     * Information about ATM services
     */
    atmServices: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMATMServicesEnum[];
    /**
     * Information about the accessibility
     */
    accessibilityTypes?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMAccessibilityTypesEnum[];
    /**
     * ATM Service Description
     */
    additionalATMServices?: string[];
    /**
     * Postal Address
     */
    address: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMAddress;
    /**
     * Unique and unambiguous identification of a retail branch of a financial institution
     */
    branchIdentification?: string;
    /**
     * Defines currency type available for dispense
     */
    currency: string[];
    /**
     * Geographic Coordinates
     */
    geographicLocation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMGeographicLocation;
    /**
     * Indicates the environment of the ATM
     */
    locationCategory?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMLocationCategoryEnum;
    /**
     * Minimum currency denominations usually available
     */
    minimumValueDispensed?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMMinimumValueDispensedEnum;
    /**
     * Organisation
     */
    organisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATMOrganisation;
    /**
     * Site identifying code, where ATM is located
     */
    siteID?: string;
    /**
     * Site identifying name, where ATM is located
     */
    siteName?: string;
    /**
     * Languages that the ATM supports
     */
    supportedLanguages: string[];
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheAPIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
/**
 * Open Banking License
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
/**
 * Open Banking Terms of Use
 */
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    /**
     * Open Banking License
     */
    license: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    /**
     * Open Banking Terms of Use
     */
    termsOfUse: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
/**
 * Successful response with a list of `ATM` data
 */
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonATM[];
    meta: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetAtmsResponse extends SpeakeasyBase {
    /**
     * You have sent a request which could not be understood.
     */
    fourHundredErrorObject?: GetAtms400ErrorObject;
    /**
     * Your client has failed to submit a request, and a timeout has occurred.
     */
    fourHundredAndEightErrorObject?: GetAtms408ErrorObject;
    /**
     * You have requested this resource too often. Slow down.
     */
    fourHundredAndTwentyNineErrorObject?: GetAtms429ErrorObject;
    /**
     * An error occurred on the server. No further information is available.
     */
    fiveHundredErrorObject?: GetAtms500ErrorObject;
    /**
     * The service is temporarily unavailable.
     */
    fiveHundredAndThreeErrorObject?: GetAtms503ErrorObject;
    contentType: string;
    /**
     * A standard error response.
     */
    errorObject?: GetAtmsErrorObject;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response with a list of `ATM` data
     */
    getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson;
}
