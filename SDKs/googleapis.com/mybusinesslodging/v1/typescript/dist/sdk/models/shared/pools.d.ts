import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Adult pool exception.
 */
export declare enum PoolsAdultPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Hot tub exception.
 */
export declare enum PoolsHotTubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Indoor pool exception.
 */
export declare enum PoolsIndoorPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Indoor pools count exception.
 */
export declare enum PoolsIndoorPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Lazy river exception.
 */
export declare enum PoolsLazyRiverExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Lifeguard exception.
 */
export declare enum PoolsLifeguardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Outdoor pool exception.
 */
export declare enum PoolsOutdoorPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Outdoor pools count exception.
 */
export declare enum PoolsOutdoorPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Pool exception.
 */
export declare enum PoolsPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Pools count exception.
 */
export declare enum PoolsPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Wading pool exception.
 */
export declare enum PoolsWadingPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water park exception.
 */
export declare enum PoolsWaterParkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Waterslide exception.
 */
export declare enum PoolsWaterslideExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Wave pool exception.
 */
export declare enum PoolsWavePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Swimming pool or recreational water facilities available at the hotel.
 */
export declare class Pools extends SpeakeasyBase {
    /**
     * Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors.
     */
    adultPool?: boolean;
    /**
     * Adult pool exception.
     */
    adultPoolException?: PoolsAdultPoolExceptionEnum;
    /**
     * Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room.
     */
    hotTub?: boolean;
    /**
     * Hot tub exception.
     */
    hotTubException?: PoolsHotTubExceptionEnum;
    /**
     * Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.
     */
    indoorPool?: boolean;
    /**
     * Indoor pool exception.
     */
    indoorPoolException?: PoolsIndoorPoolExceptionEnum;
    /**
     * Indoor pools count. The sum of all indoor pools at the hotel.
     */
    indoorPoolsCount?: number;
    /**
     * Indoor pools count exception.
     */
    indoorPoolsCountException?: PoolsIndoorPoolsCountExceptionEnum;
    /**
     * Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors.
     */
    lazyRiver?: boolean;
    /**
     * Lazy river exception.
     */
    lazyRiverException?: PoolsLazyRiverExceptionEnum;
    /**
     * Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests.
     */
    lifeguard?: boolean;
    /**
     * Lifeguard exception.
     */
    lifeguardException?: PoolsLifeguardExceptionEnum;
    /**
     * Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children.
     */
    outdoorPool?: boolean;
    /**
     * Outdoor pool exception.
     */
    outdoorPoolException?: PoolsOutdoorPoolExceptionEnum;
    /**
     * Outdoor pools count. The sum of all outdoor pools at the hotel.
     */
    outdoorPoolsCount?: number;
    /**
     * Outdoor pools count exception.
     */
    outdoorPoolsCountException?: PoolsOutdoorPoolsCountExceptionEnum;
    /**
     * Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.
     */
    pool?: boolean;
    /**
     * Pool exception.
     */
    poolException?: PoolsPoolExceptionEnum;
    /**
     * Pools count. The sum of all pools at the hotel.
     */
    poolsCount?: number;
    /**
     * Pools count exception.
     */
    poolsCountException?: PoolsPoolsCountExceptionEnum;
    /**
     * Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool.
     */
    wadingPool?: boolean;
    /**
     * Wading pool exception.
     */
    wadingPoolException?: PoolsWadingPoolExceptionEnum;
    /**
     * Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool.
     */
    waterPark?: boolean;
    /**
     * Water park exception.
     */
    waterParkException?: PoolsWaterParkExceptionEnum;
    /**
     * Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water.
     */
    waterslide?: boolean;
    /**
     * Waterslide exception.
     */
    waterslideException?: PoolsWaterslideExceptionEnum;
    /**
     * Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests.
     */
    wavePool?: boolean;
    /**
     * Wave pool exception.
     */
    wavePoolException?: PoolsWavePoolExceptionEnum;
}
