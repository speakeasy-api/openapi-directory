import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Coffee maker exception.
 */
export declare enum LivingAreaEatingCoffeeMakerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Cookware exception.
 */
export declare enum LivingAreaEatingCookwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Dishwasher exception.
 */
export declare enum LivingAreaEatingDishwasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Indoor grill exception.
 */
export declare enum LivingAreaEatingIndoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Kettle exception.
 */
export declare enum LivingAreaEatingKettleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Kitchen available exception.
 */
export declare enum LivingAreaEatingKitchenAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Microwave exception.
 */
export declare enum LivingAreaEatingMicrowaveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Minibar exception.
 */
export declare enum LivingAreaEatingMinibarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Outdoor grill exception.
 */
export declare enum LivingAreaEatingOutdoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Oven exception.
 */
export declare enum LivingAreaEatingOvenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Refrigerator exception.
 */
export declare enum LivingAreaEatingRefrigeratorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sink exception.
 */
export declare enum LivingAreaEatingSinkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Snackbar exception.
 */
export declare enum LivingAreaEatingSnackbarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Stove exception.
 */
export declare enum LivingAreaEatingStoveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Tea station exception.
 */
export declare enum LivingAreaEatingTeaStationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Toaster exception.
 */
export declare enum LivingAreaEatingToasterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Information about eating features in the living area.
 */
export declare class LivingAreaEating extends SpeakeasyBase {
    /**
     * Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee.
     */
    coffeeMaker?: boolean;
    /**
     * Coffee maker exception.
     */
    coffeeMakerException?: LivingAreaEatingCoffeeMakerExceptionEnum;
    /**
     * Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food.
     */
    cookware?: boolean;
    /**
     * Cookware exception.
     */
    cookwareException?: LivingAreaEatingCookwareExceptionEnum;
    /**
     * Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents.
     */
    dishwasher?: boolean;
    /**
     * Dishwasher exception.
     */
    dishwasherException?: LivingAreaEatingDishwasherExceptionEnum;
    /**
     * Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source.
     */
    indoorGrill?: boolean;
    /**
     * Indoor grill exception.
     */
    indoorGrillException?: LivingAreaEatingIndoorGrillExceptionEnum;
    /**
     * Kettle. A covered container with a handle and a spout used for boiling water.
     */
    kettle?: boolean;
    /**
     * Kettle exception.
     */
    kettleException?: LivingAreaEatingKettleExceptionEnum;
    /**
     * Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher.
     */
    kitchenAvailable?: boolean;
    /**
     * Kitchen available exception.
     */
    kitchenAvailableException?: LivingAreaEatingKitchenAvailableExceptionEnum;
    /**
     * Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop.
     */
    microwave?: boolean;
    /**
     * Microwave exception.
     */
    microwaveException?: LivingAreaEatingMicrowaveExceptionEnum;
    /**
     * Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee.
     */
    minibar?: boolean;
    /**
     * Minibar exception.
     */
    minibarException?: LivingAreaEatingMinibarExceptionEnum;
    /**
     * Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue.
     */
    outdoorGrill?: boolean;
    /**
     * Outdoor grill exception.
     */
    outdoorGrillException?: LivingAreaEatingOutdoorGrillExceptionEnum;
    /**
     * Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating.
     */
    oven?: boolean;
    /**
     * Oven exception.
     */
    ovenException?: LivingAreaEatingOvenExceptionEnum;
    /**
     * Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods.
     */
    refrigerator?: boolean;
    /**
     * Refrigerator exception.
     */
    refrigeratorException?: LivingAreaEatingRefrigeratorExceptionEnum;
    /**
     * Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing.
     */
    sink?: boolean;
    /**
     * Sink exception.
     */
    sinkException?: LivingAreaEatingSinkExceptionEnum;
    /**
     * Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee.
     */
    snackbar?: boolean;
    /**
     * Snackbar exception.
     */
    snackbarException?: LivingAreaEatingSnackbarExceptionEnum;
    /**
     * Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob.
     */
    stove?: boolean;
    /**
     * Stove exception.
     */
    stoveException?: LivingAreaEatingStoveExceptionEnum;
    /**
     * Tea station. A small area with the supplies needed to heat water and make tea.
     */
    teaStation?: boolean;
    /**
     * Tea station exception.
     */
    teaStationException?: LivingAreaEatingTeaStationExceptionEnum;
    /**
     * Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products.
     */
    toaster?: boolean;
    /**
     * Toaster exception.
     */
    toasterException?: LivingAreaEatingToasterExceptionEnum;
}
