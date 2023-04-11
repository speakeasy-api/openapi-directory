import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum CurrenciesSupportedCurrenciesSummaryGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class CurrenciesSupportedCurrenciesSummaryGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: CurrenciesSupportedCurrenciesSummaryGETFormatEnum;
}
export declare class CurrenciesSupportedCurrenciesSummaryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    currenciesSupportedCurrenciesSummaryGET200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
