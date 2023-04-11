import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum CurrenciesSupportedCurrenciesHistoryGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class CurrenciesSupportedCurrenciesHistoryGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: CurrenciesSupportedCurrenciesHistoryGETFormatEnum;
}
export declare class CurrenciesSupportedCurrenciesHistoryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    currenciesSupportedCurrenciesHistoryGET200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
