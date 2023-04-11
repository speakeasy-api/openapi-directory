import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Common areas physical distancing arranged exception.
 */
export declare enum PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Physical distancing required exception.
 */
export declare enum PhysicalDistancingPhysicalDistancingRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Safety dividers exception.
 */
export declare enum PhysicalDistancingSafetyDividersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Shared areas limited occupancy exception.
 */
export declare enum PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Wellness areas have private spaces exception.
 */
export declare enum PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Physical distancing measures implemented by the hotel during COVID-19.
 */
export declare class PhysicalDistancing extends SpeakeasyBase {
    /**
     * Common areas arranged to maintain physical distancing.
     */
    commonAreasPhysicalDistancingArranged?: boolean;
    /**
     * Common areas physical distancing arranged exception.
     */
    commonAreasPhysicalDistancingArrangedException?: PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum;
    /**
     * Physical distancing required.
     */
    physicalDistancingRequired?: boolean;
    /**
     * Physical distancing required exception.
     */
    physicalDistancingRequiredException?: PhysicalDistancingPhysicalDistancingRequiredExceptionEnum;
    /**
     * Safety dividers at front desk and other locations.
     */
    safetyDividers?: boolean;
    /**
     * Safety dividers exception.
     */
    safetyDividersException?: PhysicalDistancingSafetyDividersExceptionEnum;
    /**
     * Guest occupancy limited within shared facilities.
     */
    sharedAreasLimitedOccupancy?: boolean;
    /**
     * Shared areas limited occupancy exception.
     */
    sharedAreasLimitedOccupancyException?: PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum;
    /**
     * Private spaces designated in spa and wellness areas.
     */
    wellnessAreasHavePrivateSpaces?: boolean;
    /**
     * Wellness areas have private spaces exception.
     */
    wellnessAreasHavePrivateSpacesException?: PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum;
}
