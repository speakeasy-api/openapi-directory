import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
 *
 * @remarks
 *
 * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
 */
export declare enum GetIntersectionsNearOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
 */
export declare enum GetIntersectionsNearOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class GetIntersectionsNearOutputFormatRequest extends SpeakeasyBase {
    /**
     * The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.
     */
    maxDegree?: number;
    /**
     * The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
     */
    maxDistance?: number;
    /**
     * The maximum number of search results to return.
     */
    maxResults?: number;
    /**
     * The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
     */
    minDegree?: number;
    /**
     * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
     *
     * @remarks
     *
     * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
     */
    outputFormat: GetIntersectionsNearOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS: GetIntersectionsNearOutputFormatOutputSrsEnum;
    /**
     * The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
     */
    point: string;
}
export declare class GetIntersectionsNearOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
