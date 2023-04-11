import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Babysitting exception.
 */
export declare enum FamiliesBabysittingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Kids activities exception.
 */
export declare enum FamiliesKidsActivitiesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Kids club exception.
 */
export declare enum FamiliesKidsClubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Services and amenities for families and young guests.
 */
export declare class Families extends SpeakeasyBase {
    /**
     * Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee.
     */
    babysitting?: boolean;
    /**
     * Babysitting exception.
     */
    babysittingException?: FamiliesBabysittingExceptionEnum;
    /**
     * Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee.
     */
    kidsActivities?: boolean;
    /**
     * Kids activities exception.
     */
    kidsActivitiesException?: FamiliesKidsActivitiesExceptionEnum;
    /**
     * Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program.
     */
    kidsClub?: boolean;
    /**
     * Kids club exception.
     */
    kidsClubException?: FamiliesKidsClubExceptionEnum;
}
