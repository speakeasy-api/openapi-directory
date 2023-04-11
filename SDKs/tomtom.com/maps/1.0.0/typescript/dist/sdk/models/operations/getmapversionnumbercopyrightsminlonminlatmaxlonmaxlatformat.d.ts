import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Format of the response
 */
export declare enum GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
/**
 * Version of the service to call. The current version is 1
 */
export declare enum GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnum {
    One = "1"
}
export declare class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest extends SpeakeasyBase {
    /**
     * Specifies the jsonp callback method. Only used when format is jsonp.
     */
    callback?: string;
    /**
     * Format of the response
     */
    format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum;
    /**
     * Maximum latitude coordinate of bounding box defined in terms of latitude/longitude.
     */
    maxLat: number;
    /**
     * Maximum longitude coordinate of bounding box defined in terms of latitude/longitude.
     */
    maxLon: number;
    /**
     * Minimum latitude coordinate of bounding box defined in terms of latitude/longitude.
     */
    minLat: number;
    /**
     * Minimum longitude coordinate of bounding box defined in terms of latitude/longitude.
     */
    minLon: number;
    /**
     * Version of the service to call. The current version is 1
     */
    versionNumber: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnum;
}
export declare class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
