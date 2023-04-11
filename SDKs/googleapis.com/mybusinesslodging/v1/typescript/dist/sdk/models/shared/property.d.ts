import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Built year exception.
 */
export declare enum PropertyBuiltYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Floors count exception.
 */
export declare enum PropertyFloorsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Last renovated year exception.
 */
export declare enum PropertyLastRenovatedYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Rooms count exception.
 */
export declare enum PropertyRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * General factual information about the property's physical structure and important dates.
 */
export declare class Property extends SpeakeasyBase {
    /**
     * Built year. The year that construction of the property was completed.
     */
    builtYear?: number;
    /**
     * Built year exception.
     */
    builtYearException?: PropertyBuiltYearExceptionEnum;
    /**
     * Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests.
     */
    floorsCount?: number;
    /**
     * Floors count exception.
     */
    floorsCountException?: PropertyFloorsCountExceptionEnum;
    /**
     * Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior.
     */
    lastRenovatedYear?: number;
    /**
     * Last renovated year exception.
     */
    lastRenovatedYearException?: PropertyLastRenovatedYearExceptionEnum;
    /**
     * Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops.
     */
    roomsCount?: number;
    /**
     * Rooms count exception.
     */
    roomsCountException?: PropertyRoomsCountExceptionEnum;
}
