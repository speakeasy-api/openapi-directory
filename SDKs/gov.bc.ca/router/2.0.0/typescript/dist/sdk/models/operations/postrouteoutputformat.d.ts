import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
 */
export declare enum PostRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
/**
 * distance unit of measure (e.g., km, mi). Default is km.
 */
export declare enum PostRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
/**
 * Format of representation
 */
export declare enum PostRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
 */
export declare enum PostRouteOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class PostRouteOutputFormatRequest extends SpeakeasyBase {
    /**
     * If true, route starts and ends on same side of road as start/end point.Default is false.
     */
    correctSide?: boolean;
    /**
     * Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
     */
    criteria?: PostRouteOutputFormatCriteriaEnum;
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
    distanceUnit?: PostRouteOutputFormatDistanceUnitEnum;
    /**
     * Format of representation
     */
    outputFormat: PostRouteOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS?: PostRouteOutputFormatOutputSrsEnum;
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
}
export declare class PostRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
