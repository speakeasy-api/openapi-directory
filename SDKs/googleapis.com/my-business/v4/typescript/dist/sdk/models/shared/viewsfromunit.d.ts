import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Beach view exception.
 */
export declare enum ViewsFromUnitBeachViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * City view exception.
 */
export declare enum ViewsFromUnitCityViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Garden view exception.
 */
export declare enum ViewsFromUnitGardenViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Lake view exception.
 */
export declare enum ViewsFromUnitLakeViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Landmark view exception.
 */
export declare enum ViewsFromUnitLandmarkViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Ocean view exception.
 */
export declare enum ViewsFromUnitOceanViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Pool view exception.
 */
export declare enum ViewsFromUnitPoolViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Valley view exception.
 */
export declare enum ViewsFromUnitValleyViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Views available from the guest unit itself.
 */
export declare class ViewsFromUnit extends SpeakeasyBase {
    /**
     * Beach view. A guestroom that features a window through which guests can see the beach.
     */
    beachView?: boolean;
    /**
     * Beach view exception.
     */
    beachViewException?: ViewsFromUnitBeachViewExceptionEnum;
    /**
     * City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city.
     */
    cityView?: boolean;
    /**
     * City view exception.
     */
    cityViewException?: ViewsFromUnitCityViewExceptionEnum;
    /**
     * Garden view. A guestroom that features a window through which guests can see a garden.
     */
    gardenView?: boolean;
    /**
     * Garden view exception.
     */
    gardenViewException?: ViewsFromUnitGardenViewExceptionEnum;
    /**
     * Lake view.
     */
    lakeView?: boolean;
    /**
     * Lake view exception.
     */
    lakeViewException?: ViewsFromUnitLakeViewExceptionEnum;
    /**
     * Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope.
     */
    landmarkView?: boolean;
    /**
     * Landmark view exception.
     */
    landmarkViewException?: ViewsFromUnitLandmarkViewExceptionEnum;
    /**
     * Ocean view. A guestroom that features a window through which guests can see the ocean.
     */
    oceanView?: boolean;
    /**
     * Ocean view exception.
     */
    oceanViewException?: ViewsFromUnitOceanViewExceptionEnum;
    /**
     * Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool.
     */
    poolView?: boolean;
    /**
     * Pool view exception.
     */
    poolViewException?: ViewsFromUnitPoolViewExceptionEnum;
    /**
     * Valley view. A guestroom that features a window through which guests can see over a valley.
     */
    valleyView?: boolean;
    /**
     * Valley view exception.
     */
    valleyViewException?: ViewsFromUnitValleyViewExceptionEnum;
}
