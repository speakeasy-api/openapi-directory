import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsSpotRatioSummaryGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class MetalsSpotRatioSummaryGETRequest extends SpeakeasyBase {
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsSpotRatioSummaryGETFormatEnum;
    /**
     * comma separated list of metal pairs. For example: gold/silver,gold/platinum,silver/palladium
     */
    pairs: string;
}
export declare class MetalsSpotRatioSummaryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    summaryResponses?: shared.SummaryResponse[];
}
