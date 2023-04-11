import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Commercial grade disinfectant cleaning exception.
 */
export declare enum EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Common areas enhanced cleaning exception.
 */
export declare enum EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Employees trained cleaning procedures exception.
 */
export declare enum EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Employees trained thorough hand washing exception.
 */
export declare enum EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Employees wear protective equipment exception.
 */
export declare enum EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Guest rooms enhanced cleaning exception.
 */
export declare enum EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Enhanced cleaning measures implemented by the hotel during COVID-19.
 */
export declare class EnhancedCleaning extends SpeakeasyBase {
    /**
     * Commercial-grade disinfectant used to clean the property.
     */
    commercialGradeDisinfectantCleaning?: boolean;
    /**
     * Commercial grade disinfectant cleaning exception.
     */
    commercialGradeDisinfectantCleaningException?: EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum;
    /**
     * Enhanced cleaning of common areas.
     */
    commonAreasEnhancedCleaning?: boolean;
    /**
     * Common areas enhanced cleaning exception.
     */
    commonAreasEnhancedCleaningException?: EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum;
    /**
     * Employees trained in COVID-19 cleaning procedures.
     */
    employeesTrainedCleaningProcedures?: boolean;
    /**
     * Employees trained cleaning procedures exception.
     */
    employeesTrainedCleaningProceduresException?: EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum;
    /**
     * Employees trained in thorough hand-washing.
     */
    employeesTrainedThoroughHandWashing?: boolean;
    /**
     * Employees trained thorough hand washing exception.
     */
    employeesTrainedThoroughHandWashingException?: EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum;
    /**
     * Employees wear masks, face shields, and/or gloves.
     */
    employeesWearProtectiveEquipment?: boolean;
    /**
     * Employees wear protective equipment exception.
     */
    employeesWearProtectiveEquipmentException?: EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum;
    /**
     * Enhanced cleaning of guest rooms.
     */
    guestRoomsEnhancedCleaning?: boolean;
    /**
     * Guest rooms enhanced cleaning exception.
     */
    guestRoomsEnhancedCleaningException?: EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum;
}
