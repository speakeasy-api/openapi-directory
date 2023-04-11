import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { PriceRecord } from "./pricerecord";
/**
 * The user's device type.
 */
export declare enum PriceAccuracyRowDeviceTypeEnum {
    DeviceUnspecified = "DEVICE_UNSPECIFIED",
    DeviceUnknown = "DEVICE_UNKNOWN",
    Desktop = "DESKTOP",
    Mobile = "MOBILE",
    Tablet = "TABLET"
}
/**
 * The reason why the fetched price didn't match the cached price.
 */
export declare enum PriceAccuracyRowMismatchReasonEnum {
    MismatchReasonUnspecified = "MISMATCH_REASON_UNSPECIFIED",
    MismatchReasonUnknown = "MISMATCH_REASON_UNKNOWN",
    TaxMismatch = "TAX_MISMATCH",
    RoomUnavailable = "ROOM_UNAVAILABLE",
    SiteError = "SITE_ERROR",
    PriceFeedDelayed = "PRICE_FEED_DELAYED",
    DiscountMissing = "DISCOUNT_MISSING",
    IncorrectDiscountValue = "INCORRECT_DISCOUNT_VALUE",
    WrongItinerary = "WRONG_ITINERARY"
}
/**
 * Source of the price accuracy signal.
 */
export declare enum PriceAccuracyRowSignalSourceEnum {
    SignalSourceUnspecified = "SIGNAL_SOURCE_UNSPECIFIED",
    SignalSourceUnknown = "SIGNAL_SOURCE_UNKNOWN",
    Fetched = "FETCHED",
    Pixel = "PIXEL"
}
/**
 * A price accuracy row.
 */
export declare class PriceAccuracyRow extends SpeakeasyBase {
    /**
     * The number of adults in the occupancy details of the validation query.
     */
    adultOccupancy?: number;
    /**
     * True if this row affects the placement of a price. This field has been renamed to “Affects placement” in Hotel Center.
     */
    affectsScore?: boolean;
    /**
     * A price record.
     */
    cachedPriceRecord?: PriceRecord;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    checkinDate?: Date;
    /**
     * The number of children in the occupancy details of the validation query.
     */
    childOccupancy?: number;
    /**
     * Time at which an incorrect price is updated to a correct price.
     */
    correctionTime?: string;
    /**
     * The user's device type.
     */
    deviceType?: PriceAccuracyRowDeviceTypeEnum;
    /**
     * A price record.
     */
    fetchedPriceRecord?: PriceRecord;
    /**
     * The domain of the final page from which prices are read.
     */
    finalDomain?: string;
    /**
     * Partner-defined hotel ID.
     */
    hotel?: string;
    /**
     * The country of the hotel (based on address).
     */
    hotelCountryCode?: string;
    /**
     * Length of stay.
     */
    lengthOfStayDays?: number;
    /**
     * The reason why the fetched price didn't match the cached price.
     */
    mismatchReason?: PriceAccuracyRowMismatchReasonEnum;
    /**
     * The rate rule of the advertised price for non-public rates.
     */
    rateRuleId?: string;
    /**
     * Source of the price accuracy signal.
     */
    signalSource?: PriceAccuracyRowSignalSourceEnum;
    /**
     * Initial URL visited on the partner website.
     */
    url?: string;
    /**
     * The user's region.
     */
    userRegionCode?: string;
}
