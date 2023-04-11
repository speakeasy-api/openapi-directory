import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
 */
export declare enum GetOccupantsNearOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
/**
 * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
 *
 * @remarks
 *
 * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
 */
export declare enum GetOccupantsNearOutputFormatOutputFormatEnum {
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
export declare enum GetOccupantsNearOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class GetOccupantsNearOutputFormatRequest extends SpeakeasyBase {
    /**
     * If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
     */
    brief?: boolean;
    /**
     * Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
     */
    locationDescriptor?: GetOccupantsNearOutputFormatLocationDescriptorEnum;
    /**
     * The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
     */
    maxDistance?: number;
    /**
     * The maximum number of search results to return.
     */
    maxResults?: number;
    /**
     * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
     *
     * @remarks
     *
     * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
     */
    outputFormat: GetOccupantsNearOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS?: GetOccupantsNearOutputFormatOutputSrsEnum;
    /**
     * The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
     */
    point: string;
    /**
     * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
     */
    setBack?: number;
    /**
     * Example: schools;courts;employment<br>A list of tags separated by semicolons.
     */
    tags?: string;
}
export declare class GetOccupantsNearOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
