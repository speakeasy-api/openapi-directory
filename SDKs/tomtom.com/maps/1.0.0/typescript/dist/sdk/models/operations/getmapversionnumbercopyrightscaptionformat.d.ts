import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Format of the response
 */
export declare enum GetMapVersionNumberCopyrightsCaptionFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
/**
 * Version of the service to call. The current version is 1.
 */
export declare enum GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnum {
    One = "1"
}
export declare class GetMapVersionNumberCopyrightsCaptionFormatRequest extends SpeakeasyBase {
    /**
     * Specifies the jsonp callback method. Only used when format is jsonp
     */
    callback?: string;
    /**
     * Format of the response
     */
    format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;
    /**
     * Version of the service to call. The current version is 1.
     */
    versionNumber: GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnum;
}
export declare class GetMapVersionNumberCopyrightsCaptionFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
