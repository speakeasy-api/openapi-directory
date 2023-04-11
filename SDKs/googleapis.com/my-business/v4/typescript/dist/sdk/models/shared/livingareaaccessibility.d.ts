import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ADA compliant unit exception.
 */
export declare enum LivingAreaAccessibilityAdaCompliantUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Hearing-accessible doorbell exception.
 */
export declare enum LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Hearing-accessible fire alarm exception.
 */
export declare enum LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Hearing-accessible unit exception.
 */
export declare enum LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility-accessible bathtub exception.
 */
export declare enum LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility-accessible shower exception.
 */
export declare enum LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility-accessible toilet exception.
 */
export declare enum LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobility-accessible unit exception.
 */
export declare enum LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Accessibility features of the living area.
 */
export declare class LivingAreaAccessibility extends SpeakeasyBase {
    /**
     * ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.
     */
    adaCompliantUnit?: boolean;
    /**
     * ADA compliant unit exception.
     */
    adaCompliantUnitException?: LivingAreaAccessibilityAdaCompliantUnitExceptionEnum;
    /**
     * Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door.
     */
    hearingAccessibleDoorbell?: boolean;
    /**
     * Hearing-accessible doorbell exception.
     */
    hearingAccessibleDoorbellException?: LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum;
    /**
     * Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights.
     */
    hearingAccessibleFireAlarm?: boolean;
    /**
     * Hearing-accessible fire alarm exception.
     */
    hearingAccessibleFireAlarmException?: LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum;
    /**
     * Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues.
     */
    hearingAccessibleUnit?: boolean;
    /**
     * Hearing-accessible unit exception.
     */
    hearingAccessibleUnitException?: LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum;
    /**
     * Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub.
     */
    mobilityAccessibleBathtub?: boolean;
    /**
     * Mobility-accessible bathtub exception.
     */
    mobilityAccessibleBathtubException?: LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum;
    /**
     * Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged.
     */
    mobilityAccessibleShower?: boolean;
    /**
     * Mobility-accessible shower exception.
     */
    mobilityAccessibleShowerException?: LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum;
    /**
     * Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged.
     */
    mobilityAccessibleToilet?: boolean;
    /**
     * Mobility-accessible toilet exception.
     */
    mobilityAccessibleToiletException?: LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum;
    /**
     * Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.
     */
    mobilityAccessibleUnit?: boolean;
    /**
     * Mobility-accessible unit exception.
     */
    mobilityAccessibleUnitException?: LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum;
}
