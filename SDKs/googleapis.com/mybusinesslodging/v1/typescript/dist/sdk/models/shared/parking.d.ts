import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Electric car charging stations exception.
 */
export declare enum ParkingElectricCarChargingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free parking exception.
 */
export declare enum ParkingFreeParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free self parking exception.
 */
export declare enum ParkingFreeSelfParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Free valet parking exception.
 */
export declare enum ParkingFreeValetParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Parking available exception.
 */
export declare enum ParkingParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Self parking available exception.
 */
export declare enum ParkingSelfParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Valet parking available exception.
 */
export declare enum ParkingValetParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Parking options at the property.
 */
export declare class Parking extends SpeakeasyBase {
    /**
     * Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge.
     */
    electricCarChargingStations?: boolean;
    /**
     * Electric car charging stations exception.
     */
    electricCarChargingStationsException?: ParkingElectricCarChargingStationsExceptionEnum;
    /**
     * Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply).
     */
    freeParking?: boolean;
    /**
     * Free parking exception.
     */
    freeParkingException?: ParkingFreeParkingExceptionEnum;
    /**
     * Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply.
     */
    freeSelfParking?: boolean;
    /**
     * Free self parking exception.
     */
    freeSelfParkingException?: ParkingFreeSelfParkingExceptionEnum;
    /**
     * Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free.
     */
    freeValetParking?: boolean;
    /**
     * Free valet parking exception.
     */
    freeValetParkingException?: ParkingFreeValetParkingExceptionEnum;
    /**
     * Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff.
     */
    parkingAvailable?: boolean;
    /**
     * Parking available exception.
     */
    parkingAvailableException?: ParkingParkingAvailableExceptionEnum;
    /**
     * Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee.
     */
    selfParkingAvailable?: boolean;
    /**
     * Self parking available exception.
     */
    selfParkingAvailableException?: ParkingSelfParkingAvailableExceptionEnum;
    /**
     * Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee.
     */
    valetParkingAvailable?: boolean;
    /**
     * Valet parking available exception.
     */
    valetParkingAvailableException?: ParkingValetParkingAvailableExceptionEnum;
}
