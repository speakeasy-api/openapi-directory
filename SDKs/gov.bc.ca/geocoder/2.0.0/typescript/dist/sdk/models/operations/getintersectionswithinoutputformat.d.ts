import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
 *
 * @remarks
 *
 * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
 */
export declare enum GetIntersectionsWithinOutputFormatOutputFormatEnum {
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
export declare enum GetIntersectionsWithinOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class GetIntersectionsWithinOutputFormatRequest extends SpeakeasyBase {
    /**
     * A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>
     */
    bbox: string;
    /**
     * The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.
     */
    maxDegree?: number;
    /**
     * The maximum number of search results
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
    outputFormat: GetIntersectionsWithinOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS?: GetIntersectionsWithinOutputFormatOutputSrsEnum;
}
export declare class GetIntersectionsWithinOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
