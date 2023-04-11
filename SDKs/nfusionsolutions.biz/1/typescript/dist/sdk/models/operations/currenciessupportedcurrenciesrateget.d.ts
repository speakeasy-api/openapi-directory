import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum CurrenciesSupportedCurrenciesRateGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class CurrenciesSupportedCurrenciesRateGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: CurrenciesSupportedCurrenciesRateGETFormatEnum;
}
export declare class CurrenciesSupportedCurrenciesRateGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    currenciesSupportedCurrenciesRateGET200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
