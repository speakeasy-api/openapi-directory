import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsBenchmarkSupportedMetalsGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class MetalsBenchmarkSupportedMetalsGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsBenchmarkSupportedMetalsGETFormatEnum;
}
export declare class MetalsBenchmarkSupportedMetalsGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    metalsBenchmarkSupportedMetalsGET200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
