import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contactless check-in check-out exception.
 */
export declare enum MinimizedContactContactlessCheckinCheckoutExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Digital guest room keys exception.
 */
export declare enum MinimizedContactDigitalGuestRoomKeysExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Housekeeping scheduled request only exception.
 */
export declare enum MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * No high touch items common areas exception.
 */
export declare enum MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * No high touch items guest rooms exception.
 */
export declare enum MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Plastic keycards disinfected exception.
 */
export declare enum MinimizedContactPlasticKeycardsDisinfectedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Room bookings buffer exception.
 */
export declare enum MinimizedContactRoomBookingsBufferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Minimized contact measures implemented by the hotel during COVID-19.
 */
export declare class MinimizedContact extends SpeakeasyBase {
    /**
     * No-contact check-in and check-out.
     */
    contactlessCheckinCheckout?: boolean;
    /**
     * Contactless check-in check-out exception.
     */
    contactlessCheckinCheckoutException?: MinimizedContactContactlessCheckinCheckoutExceptionEnum;
    /**
     * Keyless mobile entry to guest rooms.
     */
    digitalGuestRoomKeys?: boolean;
    /**
     * Digital guest room keys exception.
     */
    digitalGuestRoomKeysException?: MinimizedContactDigitalGuestRoomKeysExceptionEnum;
    /**
     * Housekeeping scheduled by request only.
     */
    housekeepingScheduledRequestOnly?: boolean;
    /**
     * Housekeeping scheduled request only exception.
     */
    housekeepingScheduledRequestOnlyException?: MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum;
    /**
     * High-touch items, such as magazines, removed from common areas.
     */
    noHighTouchItemsCommonAreas?: boolean;
    /**
     * No high touch items common areas exception.
     */
    noHighTouchItemsCommonAreasException?: MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum;
    /**
     * High-touch items, such as decorative pillows, removed from guest rooms.
     */
    noHighTouchItemsGuestRooms?: boolean;
    /**
     * No high touch items guest rooms exception.
     */
    noHighTouchItemsGuestRoomsException?: MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum;
    /**
     * Plastic key cards are disinfected or discarded.
     */
    plasticKeycardsDisinfected?: boolean;
    /**
     * Plastic keycards disinfected exception.
     */
    plasticKeycardsDisinfectedException?: MinimizedContactPlasticKeycardsDisinfectedExceptionEnum;
    /**
     * Buffer maintained between room bookings.
     */
    roomBookingsBuffer?: boolean;
    /**
     * Room bookings buffer exception.
     */
    roomBookingsBufferException?: MinimizedContactRoomBookingsBufferExceptionEnum;
}
