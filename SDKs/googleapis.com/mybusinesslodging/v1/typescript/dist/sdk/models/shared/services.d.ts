import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageSpoken } from "./languagespoken";
/**
 * Baggage storage exception.
 */
export declare enum ServicesBaggageStorageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Concierge exception.
 */
export declare enum ServicesConciergeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Convenience store exception.
 */
export declare enum ServicesConvenienceStoreExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Currency exchange exception.
 */
export declare enum ServicesCurrencyExchangeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Elevator exception.
 */
export declare enum ServicesElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Front desk exception.
 */
export declare enum ServicesFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Full service laundry exception.
 */
export declare enum ServicesFullServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Gift shop exception.
 */
export declare enum ServicesGiftShopExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Self service laundry exception.
 */
export declare enum ServicesSelfServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Social hour exception.
 */
export declare enum ServicesSocialHourExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * 24hr front desk exception.
 */
export declare enum ServicesTwentyFourHourFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Wake up calls exception.
 */
export declare enum ServicesWakeUpCallsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
 */
export declare class Services extends SpeakeasyBase {
    /**
     * Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff.
     */
    baggageStorage?: boolean;
    /**
     * Baggage storage exception.
     */
    baggageStorageException?: ServicesBaggageStorageExceptionEnum;
    /**
     * Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions.
     */
    concierge?: boolean;
    /**
     * Concierge exception.
     */
    conciergeException?: ServicesConciergeExceptionEnum;
    /**
     * Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers.
     */
    convenienceStore?: boolean;
    /**
     * Convenience store exception.
     */
    convenienceStoreException?: ServicesConvenienceStoreExceptionEnum;
    /**
     * Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest.
     */
    currencyExchange?: boolean;
    /**
     * Currency exchange exception.
     */
    currencyExchangeException?: ServicesCurrencyExchangeExceptionEnum;
    /**
     * Elevator. A passenger elevator that transports guests from one story to another. Also known as lift.
     */
    elevator?: boolean;
    /**
     * Elevator exception.
     */
    elevatorException?: ServicesElevatorExceptionEnum;
    /**
     * Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7.
     */
    frontDesk?: boolean;
    /**
     * Front desk exception.
     */
    frontDeskException?: ServicesFrontDeskExceptionEnum;
    /**
     * Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines.
     */
    fullServiceLaundry?: boolean;
    /**
     * Full service laundry exception.
     */
    fullServiceLaundryException?: ServicesFullServiceLaundryExceptionEnum;
    /**
     * Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks.
     */
    giftShop?: boolean;
    /**
     * Gift shop exception.
     */
    giftShopException?: ServicesGiftShopExceptionEnum;
    /**
     * Languages spoken by at least one staff member.
     */
    languagesSpoken?: LanguageSpoken[];
    /**
     * Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines.
     */
    selfServiceLaundry?: boolean;
    /**
     * Self service laundry exception.
     */
    selfServiceLaundryException?: ServicesSelfServiceLaundryExceptionEnum;
    /**
     * Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour.
     */
    socialHour?: boolean;
    /**
     * Social hour exception.
     */
    socialHourException?: ServicesSocialHourExceptionEnum;
    /**
     * 24hr front desk. Front desk is staffed 24 hours a day.
     */
    twentyFourHourFrontDesk?: boolean;
    /**
     * 24hr front desk exception.
     */
    twentyFourHourFrontDeskException?: ServicesTwentyFourHourFrontDeskExceptionEnum;
    /**
     * Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call.
     */
    wakeUpCalls?: boolean;
    /**
     * Wake up calls exception.
     */
    wakeUpCallsException?: ServicesWakeUpCallsExceptionEnum;
}
