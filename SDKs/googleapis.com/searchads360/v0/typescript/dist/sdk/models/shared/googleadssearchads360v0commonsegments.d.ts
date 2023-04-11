import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conversion action category.
 */
export declare enum GoogleAdsSearchads360V0CommonSegmentsConversionActionCategoryEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Default = "DEFAULT",
    PageView = "PAGE_VIEW",
    Purchase = "PURCHASE",
    Signup = "SIGNUP",
    Lead = "LEAD",
    Download = "DOWNLOAD",
    AddToCart = "ADD_TO_CART",
    BeginCheckout = "BEGIN_CHECKOUT",
    SubscribePaid = "SUBSCRIBE_PAID",
    PhoneCallLead = "PHONE_CALL_LEAD",
    ImportedLead = "IMPORTED_LEAD",
    SubmitLeadForm = "SUBMIT_LEAD_FORM",
    BookAppointment = "BOOK_APPOINTMENT",
    RequestQuote = "REQUEST_QUOTE",
    GetDirections = "GET_DIRECTIONS",
    OutboundClick = "OUTBOUND_CLICK",
    Contact = "CONTACT",
    Engagement = "ENGAGEMENT",
    StoreVisit = "STORE_VISIT",
    StoreSale = "STORE_SALE",
    QualifiedLead = "QUALIFIED_LEAD",
    ConvertedLead = "CONVERTED_LEAD"
}
/**
 * Day of the week, for example, MONDAY.
 */
export declare enum GoogleAdsSearchads360V0CommonSegmentsDayOfWeekEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Device to which metrics apply.
 */
export declare enum GoogleAdsSearchads360V0CommonSegmentsDeviceEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Mobile = "MOBILE",
    Tablet = "TABLET",
    Desktop = "DESKTOP",
    ConnectedTv = "CONNECTED_TV",
    Other = "OTHER"
}
/**
 * Segment only fields.
 */
export declare class GoogleAdsSearchads360V0CommonSegments extends SpeakeasyBase {
    /**
     * Resource name of the conversion action.
     */
    conversionAction?: string;
    /**
     * Conversion action category.
     */
    conversionActionCategory?: GoogleAdsSearchads360V0CommonSegmentsConversionActionCategoryEnum;
    /**
     * Conversion action name.
     */
    conversionActionName?: string;
    /**
     * Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17.
     */
    date?: string;
    /**
     * Day of the week, for example, MONDAY.
     */
    dayOfWeek?: GoogleAdsSearchads360V0CommonSegmentsDayOfWeekEnum;
    /**
     * Device to which metrics apply.
     */
    device?: GoogleAdsSearchads360V0CommonSegmentsDeviceEnum;
    /**
     * Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd.
     */
    month?: string;
    /**
     * Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd.
     */
    quarter?: string;
    /**
     * Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd.
     */
    week?: string;
    /**
     * Year, formatted as yyyy.
     */
    year?: number;
}
