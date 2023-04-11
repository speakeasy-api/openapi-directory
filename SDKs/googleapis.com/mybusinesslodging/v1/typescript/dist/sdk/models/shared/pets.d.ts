import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cats allowed exception.
 */
export declare enum PetsCatsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Dogs allowed exception.
 */
export declare enum PetsDogsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Pets allowed exception.
 */
export declare enum PetsPetsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Pets allowed free exception.
 */
export declare enum PetsPetsAllowedFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Policies regarding guest-owned animals.
 */
export declare class Pets extends SpeakeasyBase {
    /**
     * Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.
     */
    catsAllowed?: boolean;
    /**
     * Cats allowed exception.
     */
    catsAllowedException?: PetsCatsAllowedExceptionEnum;
    /**
     * Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.
     */
    dogsAllowed?: boolean;
    /**
     * Dogs allowed exception.
     */
    dogsAllowedException?: PetsDogsAllowedExceptionEnum;
    /**
     * Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy.
     */
    petsAllowed?: boolean;
    /**
     * Pets allowed exception.
     */
    petsAllowedException?: PetsPetsAllowedExceptionEnum;
    /**
     * Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish.
     */
    petsAllowedFree?: boolean;
    /**
     * Pets allowed free exception.
     */
    petsAllowedFreeException?: PetsPetsAllowedFreeExceptionEnum;
}
