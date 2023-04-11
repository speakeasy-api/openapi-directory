import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The severity of the data issue.
 */
export declare enum DataIssueDetailDataIssueSeverityEnum {
    DataIssueSeverityUnspecified = "DATA_ISSUE_SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * The type of the data issue.
 */
export declare enum DataIssueDetailDataIssueTypeEnum {
    FeedDataIssueUnspecified = "FEED_DATA_ISSUE_UNSPECIFIED",
    FeedDataIssueUnknown = "FEED_DATA_ISSUE_UNKNOWN",
    NoDataIssue = "NO_DATA_ISSUE",
    DuplicateAddress = "DUPLICATE_ADDRESS",
    MissingPhysicalStreetAddress = "MISSING_PHYSICAL_STREET_ADDRESS",
    MissingStreetName = "MISSING_STREET_NAME",
    MissingStreetNumber = "MISSING_STREET_NUMBER",
    MissingAddress = "MISSING_ADDRESS",
    MissingCountry = "MISSING_COUNTRY",
    InvalidPostalCode = "INVALID_POSTAL_CODE",
    InvalidPostalCodeSuffix = "INVALID_POSTAL_CODE_SUFFIX",
    UnexpectedPostalCodeSuffix = "UNEXPECTED_POSTAL_CODE_SUFFIX",
    UnexpectedPostalCode = "UNEXPECTED_POSTAL_CODE",
    InvalidAmenities = "INVALID_AMENITIES",
    InvalidEmailAddress = "INVALID_EMAIL_ADDRESS",
    DuplicateLatlong = "DUPLICATE_LATLONG",
    LatlongInconsistentWithAddress = "LATLONG_INCONSISTENT_WITH_ADDRESS",
    MissingLatlong = "MISSING_LATLONG",
    CouldNotGeocode = "COULD_NOT_GEOCODE",
    MissingHotelName = "MISSING_HOTEL_NAME",
    HotelNameEmpty = "HOTEL_NAME_EMPTY",
    InvalidHotelName = "INVALID_HOTEL_NAME",
    HotelNameTooLong = "HOTEL_NAME_TOO_LONG",
    ParseErrorInXml = "PARSE_ERROR_IN_XML",
    UnexpectedAttributeInXml = "UNEXPECTED_ATTRIBUTE_IN_XML",
    DuplicatePhoneNumber = "DUPLICATE_PHONE_NUMBER",
    MissingPhoneNumber = "MISSING_PHONE_NUMBER",
    MissingVoicePhoneNumber = "MISSING_VOICE_PHONE_NUMBER",
    InvalidPhoneNumberFormat = "INVALID_PHONE_NUMBER_FORMAT",
    InvalidPhoneNumber = "INVALID_PHONE_NUMBER",
    InvalidPhoneNumberCountryCode = "INVALID_PHONE_NUMBER_COUNTRY_CODE",
    PhoneNumberTooLong = "PHONE_NUMBER_TOO_LONG",
    PhoneNumberTooShort = "PHONE_NUMBER_TOO_SHORT",
    InvalidWebsiteUrl = "INVALID_WEBSITE_URL",
    AdwordsAttributeTooLong = "ADWORDS_ATTRIBUTE_TOO_LONG",
    BrandNotAllowed = "BRAND_NOT_ALLOWED",
    FlaggedDueToSuspiciousMetadata = "FLAGGED_DUE_TO_SUSPICIOUS_METADATA",
    NotEnoughImagesProvided = "NOT_ENOUGH_IMAGES_PROVIDED",
    ImageProcessingInProgress = "IMAGE_PROCESSING_IN_PROGRESS",
    CannotFetchImages = "CANNOT_FETCH_IMAGES",
    IncompatibleImageSizeOrLowQuality = "INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY",
    MissingLangInRawListing = "MISSING_LANG_IN_RAW_LISTING",
    IsHotel = "IS_HOTEL",
    MissingReqAttr = "MISSING_REQ_ATTR",
    MissingName = "MISSING_NAME",
    MissingLangInName = "MISSING_LANG_IN_NAME",
    VrNameTooLong = "VR_NAME_TOO_LONG",
    TestProperty = "TEST_PROPERTY",
    NonVrAccommodationTypeBasedOnListingName = "NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME",
    BrandNameTooLong = "BRAND_NAME_TOO_LONG",
    MissingBrandName = "MISSING_BRAND_NAME",
    InvalidReviewRating = "INVALID_REVIEW_RATING",
    InvalidCheckinFormat = "INVALID_CHECKIN_FORMAT",
    InvalidCheckoutFormat = "INVALID_CHECKOUT_FORMAT"
}
/**
 * Details on a data issue in the listing.
 */
export declare class DataIssueDetail extends SpeakeasyBase {
    /**
     * The severity of the data issue.
     */
    dataIssueSeverity?: DataIssueDetailDataIssueSeverityEnum;
    /**
     * The type of the data issue.
     */
    dataIssueType?: DataIssueDetailDataIssueTypeEnum;
    /**
     * Whether or not the issue is self-resolving. If true, the issue is expected to resolve itself. If false or not set, action is needed to resolve the issue. Refer to documentation on the data issue’s type for further information.
     */
    isSelfResolving?: boolean;
}
