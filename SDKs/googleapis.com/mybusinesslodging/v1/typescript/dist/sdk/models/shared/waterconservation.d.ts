import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Independent organization audits water use exception.
 */
export declare enum WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Linen reuse program exception.
 */
export declare enum WaterConservationLinenReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Towel reuse program exception.
 */
export declare enum WaterConservationTowelReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water saving showers exception.
 */
export declare enum WaterConservationWaterSavingShowersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water saving sinks exception.
 */
export declare enum WaterConservationWaterSavingSinksExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water saving toilets exception.
 */
export declare enum WaterConservationWaterSavingToiletsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water conservation practices implemented at the hotel.
 */
export declare class WaterConservation extends SpeakeasyBase {
    /**
     * Independent organization audits water use. The property conducts a water conservation audit every 5 years, the results of which are either verified by a third-party and/or published in external communications. A water conservation audit is a detailed assessment of the facility, providing recommendations to existing operations and procedures to improve water efficiency, available incentives or rebates, and opportunities for improvements through renovations or upgrades. Examples of organizations who conduct credible third party audits include: Engie Impact, and local utility providers (they often provide energy and water audits).
     */
    independentOrganizationAuditsWaterUse?: boolean;
    /**
     * Independent organization audits water use exception.
     */
    independentOrganizationAuditsWaterUseException?: WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum;
    /**
     * Linen reuse program. The property offers a linen reuse program.
     */
    linenReuseProgram?: boolean;
    /**
     * Linen reuse program exception.
     */
    linenReuseProgramException?: WaterConservationLinenReuseProgramExceptionEnum;
    /**
     * Towel reuse program. The property offers a towel reuse program.
     */
    towelReuseProgram?: boolean;
    /**
     * Towel reuse program exception.
     */
    towelReuseProgramException?: WaterConservationTowelReuseProgramExceptionEnum;
    /**
     * Water saving showers. All of the property's guest rooms have shower heads that use no more than 2.0 gallons per minute (gpm).
     */
    waterSavingShowers?: boolean;
    /**
     * Water saving showers exception.
     */
    waterSavingShowersException?: WaterConservationWaterSavingShowersExceptionEnum;
    /**
     * Water saving sinks. All of the property's guest rooms have bathroom faucets that use a maximum of 1.5 gallons per minute (gpm), public restroom faucets do not exceed 0.5 gpm, and kitchen faucets (excluding faucets used exclusively for filling operations) do not exceed 2.2 gpm.
     */
    waterSavingSinks?: boolean;
    /**
     * Water saving sinks exception.
     */
    waterSavingSinksException?: WaterConservationWaterSavingSinksExceptionEnum;
    /**
     * Water saving toilets. All of the property's toilets use 1.6 gallons per flush, or less.
     */
    waterSavingToilets?: boolean;
    /**
     * Water saving toilets exception.
     */
    waterSavingToiletsException?: WaterConservationWaterSavingToiletsExceptionEnum;
}
