import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Balcony exception.
 */
export declare enum LivingAreaLayoutBalconyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Living area sq meters exception.
 */
export declare enum LivingAreaLayoutLivingAreaSqMetersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Loft exception.
 */
export declare enum LivingAreaLayoutLoftExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Non smoking exception.
 */
export declare enum LivingAreaLayoutNonSmokingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Patio exception.
 */
export declare enum LivingAreaLayoutPatioExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Stairs exception.
 */
export declare enum LivingAreaLayoutStairsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Information about the layout of the living area.
 */
export declare class LivingAreaLayout extends SpeakeasyBase {
    /**
     * Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai.
     */
    balcony?: boolean;
    /**
     * Balcony exception.
     */
    balconyException?: LivingAreaLayoutBalconyExceptionEnum;
    /**
     * Living area sq meters. The measurement in meters of the area of a guestroom's living space.
     */
    livingAreaSqMeters?: number;
    /**
     * Living area sq meters exception.
     */
    livingAreaSqMetersException?: LivingAreaLayoutLivingAreaSqMetersExceptionEnum;
    /**
     * Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room.
     */
    loft?: boolean;
    /**
     * Loft exception.
     */
    loftException?: LivingAreaLayoutLoftExceptionEnum;
    /**
     * Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited.
     */
    nonSmoking?: boolean;
    /**
     * Non smoking exception.
     */
    nonSmokingException?: LivingAreaLayoutNonSmokingExceptionEnum;
    /**
     * Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom.
     */
    patio?: boolean;
    /**
     * Patio exception.
     */
    patioException?: LivingAreaLayoutPatioExceptionEnum;
    /**
     * Stairs. There are steps leading from one level or story to another in the unit.
     */
    stairs?: boolean;
    /**
     * Stairs exception.
     */
    stairsException?: LivingAreaLayoutStairsExceptionEnum;
}
