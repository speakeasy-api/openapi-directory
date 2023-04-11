import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mobility accessible elevator exception.
 */
export declare enum AccessibilityMobilityAccessibleElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility accessible exception.
 */
export declare enum AccessibilityMobilityAccessibleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility accessible parking exception.
 */
export declare enum AccessibilityMobilityAccessibleParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility accessible pool exception.
 */
export declare enum AccessibilityMobilityAccessiblePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Physical adaptations made to the property in consideration of varying levels of human physical ability.
 */
export declare class Accessibility extends SpeakeasyBase {
    /**
     * Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps.
     */
    mobilityAccessible?: boolean;
    /**
     * Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons.
     */
    mobilityAccessibleElevator?: boolean;
    /**
     * Mobility accessible elevator exception.
     */
    mobilityAccessibleElevatorException?: AccessibilityMobilityAccessibleElevatorExceptionEnum;
    /**
     * Mobility accessible exception.
     */
    mobilityAccessibleException?: AccessibilityMobilityAccessibleExceptionEnum;
    /**
     * Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park.
     */
    mobilityAccessibleParking?: boolean;
    /**
     * Mobility accessible parking exception.
     */
    mobilityAccessibleParkingException?: AccessibilityMobilityAccessibleParkingExceptionEnum;
    /**
     * Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift.
     */
    mobilityAccessiblePool?: boolean;
    /**
     * Mobility accessible pool exception.
     */
    mobilityAccessiblePoolException?: AccessibilityMobilityAccessiblePoolExceptionEnum;
}
