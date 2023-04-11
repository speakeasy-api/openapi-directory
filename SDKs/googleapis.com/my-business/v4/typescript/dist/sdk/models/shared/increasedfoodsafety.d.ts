import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dining areas additional sanitation exception.
 */
export declare enum IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Disposable flatware exception.
 */
export declare enum IncreasedFoodSafetyDisposableFlatwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Food preparation and serving additional safety exception.
 */
export declare enum IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Individual packaged meals exception.
 */
export declare enum IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Single use food menus exception.
 */
export declare enum IncreasedFoodSafetySingleUseFoodMenusExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Increased food safety measures implemented by the hotel during COVID-19.
 */
export declare class IncreasedFoodSafety extends SpeakeasyBase {
    /**
     * Additional sanitation in dining areas.
     */
    diningAreasAdditionalSanitation?: boolean;
    /**
     * Dining areas additional sanitation exception.
     */
    diningAreasAdditionalSanitationException?: IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum;
    /**
     * Disposable flatware.
     */
    disposableFlatware?: boolean;
    /**
     * Disposable flatware exception.
     */
    disposableFlatwareException?: IncreasedFoodSafetyDisposableFlatwareExceptionEnum;
    /**
     * Additional safety measures during food prep and serving.
     */
    foodPreparationAndServingAdditionalSafety?: boolean;
    /**
     * Food preparation and serving additional safety exception.
     */
    foodPreparationAndServingAdditionalSafetyException?: IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum;
    /**
     * Individually-packaged meals.
     */
    individualPackagedMeals?: boolean;
    /**
     * Individual packaged meals exception.
     */
    individualPackagedMealsException?: IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum;
    /**
     * Single-use menus.
     */
    singleUseFoodMenus?: boolean;
    /**
     * Single use food menus exception.
     */
    singleUseFoodMenusException?: IncreasedFoodSafetySingleUseFoodMenusExceptionEnum;
}
