import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Format of the response
 */
export declare enum GetMapVersionNumberCopyrightsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
/**
 * Version of the service to call. The current version is 1
 */
export declare enum GetMapVersionNumberCopyrightsFormatVersionNumberEnum {
    One = "1"
}
export declare class GetMapVersionNumberCopyrightsFormatRequest extends SpeakeasyBase {
    /**
     * Specifies the jsonp callback method. Only used when format is jsonp
     */
    callback?: string;
    /**
     * Format of the response
     */
    format: GetMapVersionNumberCopyrightsFormatFormatEnum;
    /**
     * Version of the service to call. The current version is 1
     */
    versionNumber: GetMapVersionNumberCopyrightsFormatVersionNumberEnum;
}
export declare class GetMapVersionNumberCopyrightsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
