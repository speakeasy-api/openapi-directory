import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Beds count exception.
 */
export declare enum LivingAreaSleepingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Bunk beds count exception.
 */
export declare enum LivingAreaSleepingBunkBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Cribs count exception.
 */
export declare enum LivingAreaSleepingCribsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Double beds count exception.
 */
export declare enum LivingAreaSleepingDoubleBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Feather pillows exception.
 */
export declare enum LivingAreaSleepingFeatherPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Hypoallergenic bedding exception.
 */
export declare enum LivingAreaSleepingHypoallergenicBeddingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * King beds count exception.
 */
export declare enum LivingAreaSleepingKingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Memory foam pillows exception.
 */
export declare enum LivingAreaSleepingMemoryFoamPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Other beds count exception.
 */
export declare enum LivingAreaSleepingOtherBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Queen beds count exception.
 */
export declare enum LivingAreaSleepingQueenBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Roll away beds count exception.
 */
export declare enum LivingAreaSleepingRollAwayBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Single or twin beds count exception.
 */
export declare enum LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sofa beds count exception.
 */
export declare enum LivingAreaSleepingSofaBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Synthetic pillows exception.
 */
export declare enum LivingAreaSleepingSyntheticPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Information about sleeping features in the living area.
 */
export declare class LivingAreaSleeping extends SpeakeasyBase {
    /**
     * Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds.
     */
    bedsCount?: number;
    /**
     * Beds count exception.
     */
    bedsCountException?: LivingAreaSleepingBedsCountExceptionEnum;
    /**
     * Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed.
     */
    bunkBedsCount?: number;
    /**
     * Bunk beds count exception.
     */
    bunkBedsCountException?: LivingAreaSleepingBunkBedsCountExceptionEnum;
    /**
     * Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed
     */
    cribsCount?: number;
    /**
     * Cribs count exception.
     */
    cribsCountException?: LivingAreaSleepingCribsCountExceptionEnum;
    /**
     * Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed.
     */
    doubleBedsCount?: number;
    /**
     * Double beds count exception.
     */
    doubleBedsCountException?: LivingAreaSleepingDoubleBedsCountExceptionEnum;
    /**
     * Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese.
     */
    featherPillows?: boolean;
    /**
     * Feather pillows exception.
     */
    featherPillowsException?: LivingAreaSleepingFeatherPillowsExceptionEnum;
    /**
     * Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander.
     */
    hypoallergenicBedding?: boolean;
    /**
     * Hypoallergenic bedding exception.
     */
    hypoallergenicBeddingException?: LivingAreaSleepingHypoallergenicBeddingExceptionEnum;
    /**
     * King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king.
     */
    kingBedsCount?: number;
    /**
     * King beds count exception.
     */
    kingBedsCountException?: LivingAreaSleepingKingBedsCountExceptionEnum;
    /**
     * Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down.
     */
    memoryFoamPillows?: boolean;
    /**
     * Memory foam pillows exception.
     */
    memoryFoamPillowsException?: LivingAreaSleepingMemoryFoamPillowsExceptionEnum;
    /**
     * Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots.
     */
    otherBedsCount?: number;
    /**
     * Other beds count exception.
     */
    otherBedsCountException?: LivingAreaSleepingOtherBedsCountExceptionEnum;
    /**
     * Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm).
     */
    queenBedsCount?: number;
    /**
     * Queen beds count exception.
     */
    queenBedsCountException?: LivingAreaSleepingQueenBedsCountExceptionEnum;
    /**
     * Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request.
     */
    rollAwayBedsCount?: number;
    /**
     * Roll away beds count exception.
     */
    rollAwayBedsCountException?: LivingAreaSleepingRollAwayBedsCountExceptionEnum;
    /**
     * Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult.
     */
    singleOrTwinBedsCount?: number;
    /**
     * Single or twin beds count exception.
     */
    singleOrTwinBedsCountException?: LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum;
    /**
     * Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress.
     */
    sofaBedsCount?: number;
    /**
     * Sofa beds count exception.
     */
    sofaBedsCountException?: LivingAreaSleepingSofaBedsCountExceptionEnum;
    /**
     * Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers.
     */
    syntheticPillows?: boolean;
    /**
     * Synthetic pillows exception.
     */
    syntheticPillowsException?: LivingAreaSleepingSyntheticPillowsExceptionEnum;
}
