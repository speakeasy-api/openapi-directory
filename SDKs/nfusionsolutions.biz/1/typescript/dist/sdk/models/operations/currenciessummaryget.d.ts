import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum CurrenciesSummaryGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class CurrenciesSummaryGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: CurrenciesSummaryGETFormatEnum;
    /**
     * comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
     */
    pairs: string;
}
export declare class CurrenciesSummaryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    summaryResponses?: shared.SummaryResponse[];
}
