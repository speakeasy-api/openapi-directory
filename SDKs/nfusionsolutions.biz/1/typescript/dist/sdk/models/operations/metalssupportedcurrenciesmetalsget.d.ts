import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsSupportedCurrenciesMetalsGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class MetalsSupportedCurrenciesMetalsGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsSupportedCurrenciesMetalsGETFormatEnum;
}
export declare class MetalsSupportedCurrenciesMetalsGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    metalsSupportedCurrenciesMetalsGET200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
