import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
 *
 * @remarks
 *
 * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
 */
export declare enum GetParcelsPidsSiteIDOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetParcelsPidsSiteIDOutputFormatRequest extends SpeakeasyBase {
    /**
     * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
     *
     * @remarks
     *
     * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
     */
    outputFormat: GetParcelsPidsSiteIDOutputFormatOutputFormatEnum;
    /**
     * A unique, but not immutable, site identifier.
     */
    siteID: string;
}
export declare class GetParcelsPidsSiteIDOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
