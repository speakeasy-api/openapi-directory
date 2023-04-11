import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
 */
export declare enum GetDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
/**
 * distance unit of measure (e.g., km, mi). Default is km.
 */
export declare enum GetDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
/**
 * Format of representation
 */
export declare enum GetDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
 */
export declare enum GetDistanceBetweenPairsOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class GetDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
    /**
     * If true, route starts and ends on same side of road as start and end points.Default is false.
     */
    correctSide?: boolean;
    /**
     * Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.
     */
    criteria?: GetDistanceBetweenPairsOutputFormatCriteriaEnum;
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
    distanceUnit?: GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;
    /**
     * A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>
     */
    fromPoints: string;
    /**
     * The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.
     */
    maxPairs?: number;
    /**
     * Format of representation
     */
    outputFormat: GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS?: GetDistanceBetweenPairsOutputFormatOutputSrsEnum;
    /**
     * Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)
     */
    routeDescription?: string;
    /**
     * A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>
     */
    toPoints: string;
}
export declare class GetDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
