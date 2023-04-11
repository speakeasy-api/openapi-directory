import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
 */
export declare enum GetTruckOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
/**
 * distance unit of measure (e.g., km, mi). Default is km.
 */
export declare enum GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
/**
 * Format of representation
 */
export declare enum GetTruckOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
 */
export declare enum GetTruckOptimalDirectionsOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class GetTruckOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
    /**
     * If true, route starts and ends on same side of road as start and end points.Default is false.
     */
    correctSide?: boolean;
    /**
     * Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
     */
    criteria?: GetTruckOptimalDirectionsOutputFormatCriteriaEnum;
    /**
     * departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled
     */
    departure?: Date;
    /**
     * A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)
     */
    disable?: string;
    /**
     * distance unit of measure (e.g., km, mi). Default is km.
     */
    distanceUnit?: GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
    /**
     * Format of representation
     */
    outputFormat: GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS?: GetTruckOptimalDirectionsOutputFormatOutputSrsEnum;
    /**
     * A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition
     */
    partition?: string;
    /**
     * A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>
     */
    points: string;
    /**
     * If true, route ends at start point. Default is false.
     */
    roundTrip?: boolean;
    /**
     * Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)
     */
    routeDescription?: string;
    /**
     * The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.
     */
    truckRouteMultiplier?: number;
}
export declare class GetTruckOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
