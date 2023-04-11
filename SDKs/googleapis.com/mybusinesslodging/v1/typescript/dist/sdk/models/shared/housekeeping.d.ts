import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Daily housekeeping exception.
 */
export declare enum HousekeepingDailyHousekeepingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Housekeeping available exception.
 */
export declare enum HousekeepingHousekeepingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Turndown service exception.
 */
export declare enum HousekeepingTurndownServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
 */
export declare class Housekeeping extends SpeakeasyBase {
    /**
     * Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay.
     */
    dailyHousekeeping?: boolean;
    /**
     * Daily housekeeping exception.
     */
    dailyHousekeepingException?: HousekeepingDailyHousekeepingExceptionEnum;
    /**
     * Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week.
     */
    housekeepingAvailable?: boolean;
    /**
     * Housekeeping available exception.
     */
    housekeepingAvailableException?: HousekeepingHousekeepingAvailableExceptionEnum;
    /**
     * Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service.
     */
    turndownService?: boolean;
    /**
     * Turndown service exception.
     */
    turndownServiceException?: HousekeepingTurndownServiceExceptionEnum;
}
