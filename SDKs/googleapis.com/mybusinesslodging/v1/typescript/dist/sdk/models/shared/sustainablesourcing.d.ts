import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Eco friendly toiletries exception.
 */
export declare enum SustainableSourcingEcoFriendlyToiletriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Locally sourced food and beverages exception.
 */
export declare enum SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Organic cage free eggs exception.
 */
export declare enum SustainableSourcingOrganicCageFreeEggsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Organic food and beverages exception.
 */
export declare enum SustainableSourcingOrganicFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Responsible purchasing policy exception.
 */
export declare enum SustainableSourcingResponsiblePurchasingPolicyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Responsibly sources seafood exception.
 */
export declare enum SustainableSourcingResponsiblySourcesSeafoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Vegan meals exception.
 */
export declare enum SustainableSourcingVeganMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Vegetarian meals exception.
 */
export declare enum SustainableSourcingVegetarianMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sustainable sourcing practices implemented at the hotel.
 */
export declare class SustainableSourcing extends SpeakeasyBase {
    /**
     * Eco friendly toiletries. Soap, shampoo, lotion, and other toiletries provided for guests have a nationally or internationally recognized sustainability certification, such as USDA Organic, EU Organic, or cruelty-free.
     */
    ecoFriendlyToiletries?: boolean;
    /**
     * Eco friendly toiletries exception.
     */
    ecoFriendlyToiletriesException?: SustainableSourcingEcoFriendlyToiletriesExceptionEnum;
    /**
     * Locally sourced food and beverages. Property sources locally in order to lower the environmental footprint from reduced transportation and to stimulate the local economy. Products produced less than 62 miles from the establishment are normally considered as locally produced.
     */
    locallySourcedFoodAndBeverages?: boolean;
    /**
     * Locally sourced food and beverages exception.
     */
    locallySourcedFoodAndBeveragesException?: SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum;
    /**
     * Organic cage free eggs. The property sources 100% certified organic and cage-free eggs (shell, liquid, and egg products). Cage-free means hens are able to walk, spread their wings and lay their eggs in nests).
     */
    organicCageFreeEggs?: boolean;
    /**
     * Organic cage free eggs exception.
     */
    organicCageFreeEggsException?: SustainableSourcingOrganicCageFreeEggsExceptionEnum;
    /**
     * Organic food and beverages. At least 25% of food and beverages, by spend, are certified organic. Organic means products that are certified to one of the organic standard listed in the IFOAM family of standards. Qualifying certifications include USDA Organic and EU Organic, among others.
     */
    organicFoodAndBeverages?: boolean;
    /**
     * Organic food and beverages exception.
     */
    organicFoodAndBeveragesException?: SustainableSourcingOrganicFoodAndBeveragesExceptionEnum;
    /**
     * Responsible purchasing policy. The property has a responsible procurement policy in place. Responsible means integration of social, ethical, and/or environmental performance factors into the procurement process when selecting suppliers.
     */
    responsiblePurchasingPolicy?: boolean;
    /**
     * Responsible purchasing policy exception.
     */
    responsiblePurchasingPolicyException?: SustainableSourcingResponsiblePurchasingPolicyExceptionEnum;
    /**
     * Responsibly sources seafood. The property does not source seafood from the Monterey Bay Aquarium Seafood Watch "avoid" list, and must sustainably source seafood listed as "good alternative," "eco-certified," and "best choice". The property has a policy outlining a commitment to source Marine Stewardship Council (MSC) and/or Aquaculture Stewardship Council (ASC) Chain of Custody certified seafood.
     */
    responsiblySourcesSeafood?: boolean;
    /**
     * Responsibly sources seafood exception.
     */
    responsiblySourcesSeafoodException?: SustainableSourcingResponsiblySourcesSeafoodExceptionEnum;
    /**
     * Vegan meals. The property provides vegan menu options for guests. Vegan food does not contain animal products or byproducts.
     */
    veganMeals?: boolean;
    /**
     * Vegan meals exception.
     */
    veganMealsException?: SustainableSourcingVeganMealsExceptionEnum;
    /**
     * Vegetarian meals. The property provides vegetarian menu options for guests. Vegetarian food does not contain meat, poultry, fish, or seafood.
     */
    vegetarianMeals?: boolean;
    /**
     * Vegetarian meals exception.
     */
    vegetarianMealsException?: SustainableSourcingVegetarianMealsExceptionEnum;
}
