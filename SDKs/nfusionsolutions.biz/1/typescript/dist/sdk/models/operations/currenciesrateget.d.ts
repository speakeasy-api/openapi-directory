import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum CurrenciesRateGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class CurrenciesRateGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: CurrenciesRateGETFormatEnum;
    /**
     * comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
     */
    pairs: string;
}
export declare class CurrenciesRateGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    rateResponses?: shared.RateResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
