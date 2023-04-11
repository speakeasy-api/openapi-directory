import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Common areas offer sanitizing items exception.
 */
export declare enum PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Face mask required exception.
 */
export declare enum PersonalProtectionFaceMaskRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Guest room hygiene kits available exception.
 */
export declare enum PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Protective equipment available exception.
 */
export declare enum PersonalProtectionProtectiveEquipmentAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Personal protection measures implemented by the hotel during COVID-19.
 */
export declare class PersonalProtection extends SpeakeasyBase {
    /**
     * Hand-sanitizer and/or sanitizing wipes are offered in common areas.
     */
    commonAreasOfferSanitizingItems?: boolean;
    /**
     * Common areas offer sanitizing items exception.
     */
    commonAreasOfferSanitizingItemsException?: PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum;
    /**
     * Masks required on the property.
     */
    faceMaskRequired?: boolean;
    /**
     * Face mask required exception.
     */
    faceMaskRequiredException?: PersonalProtectionFaceMaskRequiredExceptionEnum;
    /**
     * In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes.
     */
    guestRoomHygieneKitsAvailable?: boolean;
    /**
     * Guest room hygiene kits available exception.
     */
    guestRoomHygieneKitsAvailableException?: PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum;
    /**
     * Masks and/or gloves available for guests.
     */
    protectiveEquipmentAvailable?: boolean;
    /**
     * Protective equipment available exception.
     */
    protectiveEquipmentAvailableException?: PersonalProtectionProtectiveEquipmentAvailableExceptionEnum;
}
