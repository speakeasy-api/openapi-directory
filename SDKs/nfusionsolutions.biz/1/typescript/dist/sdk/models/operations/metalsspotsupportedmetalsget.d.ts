import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsSpotSupportedMetalsGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class MetalsSpotSupportedMetalsGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsSpotSupportedMetalsGETFormatEnum;
}
export declare class MetalsSpotSupportedMetalsGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    metalsSpotSupportedMetalsGET200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
