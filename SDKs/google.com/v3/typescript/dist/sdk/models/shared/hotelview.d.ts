import { SpeakeasyBase } from "../../../internal/utils";
import { DataIssueDetail } from "./dataissuedetail";
export declare enum HotelViewDataIssuesEnum {
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
 * Current matching status of the hotel.
 */
export declare enum HotelViewMatchStatusEnum {
    MatchStatusUnspecified = "MATCH_STATUS_UNSPECIFIED",
    MatchStatusUnknown = "MATCH_STATUS_UNKNOWN",
    NotMatched = "NOT_MATCHED",
    Matched = "MATCHED",
    MapOverlap = "MAP_OVERLAP"
}
/**
 * A hotel view.
 */
export declare class HotelView extends SpeakeasyBase {
    /**
     * The type and severity of each data quality issue in the feed. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article.
     */
    dataIssueDetail?: DataIssueDetail[];
    /**
     * DEPRECATED. Indicates that the hotel has data quality issues. The value of this field indicates the type of error. This has been replaced with the data_issue_detail field. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article.
     */
    dataIssues?: HotelViewDataIssuesEnum[];
    /**
     * The Google Maps identifier for the hotel.
     */
    googleClusterId?: string;
    /**
     * Google's hotel name.
     */
    googleHotelDisplayName?: string;
    /**
     * Google's canonical ID for the hotel.
     */
    googleHotelId?: string;
    /**
     * Optional. Whether the hotel appears in Google's hotel booking links. Declaration & behavior to get detection of presence/absence in JSON conversion.
     */
    liveOnGoogle?: boolean;
    /**
     * Current matching status of the hotel.
     */
    matchStatus?: HotelViewMatchStatusEnum;
    /**
     * Other hotels with which the hotel is overclustered. If your feed contains overclustered hotels, update the feed and resubmit it. To do this, you can use the manual match tool.
     */
    overclusteredPartnerHotelIds?: string[];
    /**
     * Partner's hotel name.
     */
    partnerHotelDisplayName?: string;
    /**
     * The unique ID of the hotel that the partner provides in their Hotel List Feed.
     */
    partnerHotelId?: string;
    /**
     * The primary hotel in the overclustered set.
     */
    primaryOverclusteredPartnerHotelId?: string;
    /**
     * Optional. A URL to the property on Google. Only available for properties that are listed.
     */
    propertyDetails?: string;
}
