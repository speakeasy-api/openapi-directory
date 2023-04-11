import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Airport shuttle exception.
 */
export declare enum TransportationAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Car rental on property exception.
 */
export declare enum TransportationCarRentalOnPropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free airport shuttle exception.
 */
export declare enum TransportationFreeAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free private car service exception.
 */
export declare enum TransportationFreePrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Local shuttle exception.
 */
export declare enum TransportationLocalShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Private car service exception.
 */
export declare enum TransportationPrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Transfer exception.
 */
export declare enum TransportationTransferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Vehicles or vehicular services facilitated or owned by the property.
 */
export declare class Transportation extends SpeakeasyBase {
    /**
     * Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel.
     */
    airportShuttle?: boolean;
    /**
     * Airport shuttle exception.
     */
    airportShuttleException?: TransportationAirportShuttleExceptionEnum;
    /**
     * Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot.
     */
    carRentalOnProperty?: boolean;
    /**
     * Car rental on property exception.
     */
    carRentalOnPropertyException?: TransportationCarRentalOnPropertyExceptionEnum;
    /**
     * Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions.
     */
    freeAirportShuttle?: boolean;
    /**
     * Free airport shuttle exception.
     */
    freeAirportShuttleException?: TransportationFreeAirportShuttleExceptionEnum;
    /**
     * Free private car service. Private chauffeured car service is free to guests.
     */
    freePrivateCarService?: boolean;
    /**
     * Free private car service exception.
     */
    freePrivateCarServiceException?: TransportationFreePrivateCarServiceExceptionEnum;
    /**
     * Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee.
     */
    localShuttle?: boolean;
    /**
     * Local shuttle exception.
     */
    localShuttleException?: TransportationLocalShuttleExceptionEnum;
    /**
     * Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi.
     */
    privateCarService?: boolean;
    /**
     * Private car service exception.
     */
    privateCarServiceException?: TransportationPrivateCarServiceExceptionEnum;
    /**
     * Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them.
     */
    transfer?: boolean;
    /**
     * Transfer exception.
     */
    transferException?: TransportationTransferExceptionEnum;
}
