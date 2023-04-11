import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Compostable food containers and cutlery exception.
 */
export declare enum WasteReductionCompostableFoodContainersAndCutleryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Composts excess food exception.
 */
export declare enum WasteReductionCompostsExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Donates excess food exception.
 */
export declare enum WasteReductionDonatesExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Food waste reduction program exception.
 */
export declare enum WasteReductionFoodWasteReductionProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * No single use plastic straws exception.
 */
export declare enum WasteReductionNoSingleUsePlasticStrawsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * No single use plastic water bottles exception.
 */
export declare enum WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * No styrofoam food containers exception.
 */
export declare enum WasteReductionNoStyrofoamFoodContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Recycling program exception.
 */
export declare enum WasteReductionRecyclingProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Refillable toiletry containers exception.
 */
export declare enum WasteReductionRefillableToiletryContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Safely disposes batteries exception.
 */
export declare enum WasteReductionSafelyDisposesBatteriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Safely disposes electronics exception.
 */
export declare enum WasteReductionSafelyDisposesElectronicsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Safely disposes lightbulbs exception.
 */
export declare enum WasteReductionSafelyDisposesLightbulbsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Safely handles hazardous substances exception.
 */
export declare enum WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Soap donation program exception.
 */
export declare enum WasteReductionSoapDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Toiletry donation program exception.
 */
export declare enum WasteReductionToiletryDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water bottle filling stations exception.
 */
export declare enum WasteReductionWaterBottleFillingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Waste reduction practices implemented at the hotel.
 */
export declare class WasteReduction extends SpeakeasyBase {
    /**
     * Compostable food containers and cutlery. 100% of food service containers and to-go cutlery are compostable, and reusable utensils are offered wherever possible. Compostable materials are capable of undergoing biological decomposition in a compost site, such that material is not visually distinguishable and breaks down into carbon dioxide, water, inorganic compounds, and biomass.
     */
    compostableFoodContainersAndCutlery?: boolean;
    /**
     * Compostable food containers and cutlery exception.
     */
    compostableFoodContainersAndCutleryException?: WasteReductionCompostableFoodContainersAndCutleryExceptionEnum;
    /**
     * Composts excess food. The property has a program and/or policy for diverting waste from landfill by composting food and yard waste, either through compost collection and off-site processing or on-site compost processing.
     */
    compostsExcessFood?: boolean;
    /**
     * Composts excess food exception.
     */
    compostsExcessFoodException?: WasteReductionCompostsExcessFoodExceptionEnum;
    /**
     * Donates excess food. The property has a program and/or policy for diverting waste from landfill that may include efforts to donate for human consumption or divert food for animal feed.
     */
    donatesExcessFood?: boolean;
    /**
     * Donates excess food exception.
     */
    donatesExcessFoodException?: WasteReductionDonatesExcessFoodExceptionEnum;
    /**
     * Food waste reduction program. The property has established a food waste reduction and donation program, aiming to reduce food waste by half. These programs typically use tools such as the Hotel Kitchen Toolkit and others to track waste and measure progress.
     */
    foodWasteReductionProgram?: boolean;
    /**
     * Food waste reduction program exception.
     */
    foodWasteReductionProgramException?: WasteReductionFoodWasteReductionProgramExceptionEnum;
    /**
     * No single use plastic straws. The property bans single-use plastic straws.
     */
    noSingleUsePlasticStraws?: boolean;
    /**
     * No single use plastic straws exception.
     */
    noSingleUsePlasticStrawsException?: WasteReductionNoSingleUsePlasticStrawsExceptionEnum;
    /**
     * No single use plastic water bottles. The property bans single-use plastic water bottles.
     */
    noSingleUsePlasticWaterBottles?: boolean;
    /**
     * No single use plastic water bottles exception.
     */
    noSingleUsePlasticWaterBottlesException?: WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum;
    /**
     * No styrofoam food containers. The property eliminates the use of Styrofoam in disposable food service items.
     */
    noStyrofoamFoodContainers?: boolean;
    /**
     * No styrofoam food containers exception.
     */
    noStyrofoamFoodContainersException?: WasteReductionNoStyrofoamFoodContainersExceptionEnum;
    /**
     * Recycling program. The property has a recycling program, aligned with LEED waste requirements, and a policy outlining efforts to send less than 50% of waste to landfill. The recycling program includes storage locations for recyclable materials, including mixed paper, corrugated cardboard, glass, plastics, and metals.
     */
    recyclingProgram?: boolean;
    /**
     * Recycling program exception.
     */
    recyclingProgramException?: WasteReductionRecyclingProgramExceptionEnum;
    /**
     * Refillable toiletry containers. The property has replaced miniature individual containers with refillable amenity dispensers for shampoo, conditioner, soap, and lotion.
     */
    refillableToiletryContainers?: boolean;
    /**
     * Refillable toiletry containers exception.
     */
    refillableToiletryContainersException?: WasteReductionRefillableToiletryContainersExceptionEnum;
    /**
     * Safely disposes batteries. The property safely stores and disposes batteries.
     */
    safelyDisposesBatteries?: boolean;
    /**
     * Safely disposes batteries exception.
     */
    safelyDisposesBatteriesException?: WasteReductionSafelyDisposesBatteriesExceptionEnum;
    /**
     * Safely disposes electronics. The property has a reputable recycling program that keeps hazardous electronic parts and chemical compounds out of landfills, dumps and other unauthorized abandonment sites, and recycles/reuses applicable materials. (e.g. certified electronics recyclers).
     */
    safelyDisposesElectronics?: boolean;
    /**
     * Safely disposes electronics exception.
     */
    safelyDisposesElectronicsException?: WasteReductionSafelyDisposesElectronicsExceptionEnum;
    /**
     * Safely disposes lightbulbs. The property safely stores and disposes lightbulbs.
     */
    safelyDisposesLightbulbs?: boolean;
    /**
     * Safely disposes lightbulbs exception.
     */
    safelyDisposesLightbulbsException?: WasteReductionSafelyDisposesLightbulbsExceptionEnum;
    /**
     * Safely handles hazardous substances. The property has a hazardous waste management program aligned wit GreenSeal and LEED requirements, and meets all regulatory requirements for hazardous waste disposal and recycling. Hazardous means substances that are classified as "hazardous" by an authoritative body (such as OSHA or DOT), are labeled with signal words such as "Danger," "Caution," "Warning," or are flammable, corrosive, or ignitable. Requirements include: - The property shall maintain records of the efforts it has made to replace the hazardous substances it uses with less hazardous alternatives. - An inventory of the hazardous materials stored on-site. - Products intended for cleaning, dishwashing, laundry, and pool maintenance shall be stored in clearly labeled containers. These containers shall be checked regularly for leaks, and replaced a necessary. - Spill containment devices shall be installed to collect spills, drips, or leaching of chemicals.
     */
    safelyHandlesHazardousSubstances?: boolean;
    /**
     * Safely handles hazardous substances exception.
     */
    safelyHandlesHazardousSubstancesException?: WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum;
    /**
     * Soap donation program. The property participates in a soap donation program such as Clean the World or something similar.
     */
    soapDonationProgram?: boolean;
    /**
     * Soap donation program exception.
     */
    soapDonationProgramException?: WasteReductionSoapDonationProgramExceptionEnum;
    /**
     * Toiletry donation program. The property participates in a toiletry donation program such as Clean the World or something similar.
     */
    toiletryDonationProgram?: boolean;
    /**
     * Toiletry donation program exception.
     */
    toiletryDonationProgramException?: WasteReductionToiletryDonationProgramExceptionEnum;
    /**
     * Water bottle filling stations. The property offers water stations throughout the building for guest use.
     */
    waterBottleFillingStations?: boolean;
    /**
     * Water bottle filling stations exception.
     */
    waterBottleFillingStationsException?: WasteReductionWaterBottleFillingStationsExceptionEnum;
}
