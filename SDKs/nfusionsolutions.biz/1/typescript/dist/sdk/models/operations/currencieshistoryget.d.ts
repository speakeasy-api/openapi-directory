import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum CurrenciesHistoryGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class CurrenciesHistoryGETRequest extends SpeakeasyBase {
    /**
     * end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
     */
    end?: Date;
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: CurrenciesHistoryGETFormatEnum;
    /**
     * aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),
     *
     * @remarks
     * followed by a type string which must be one of the following values:
     * y=year,
     * m=month,
     * w=week,
     * d=day,
     * h=hour,
     * mi=minute
     *
     * For example, a yearly interval can be specified as "y" and 6 month interval as "6m".
     *
     * If not specified the interval parameter default is 1 Day.
     */
    interval?: string;
    /**
     * comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
     */
    pairs: string;
    /**
     * start date of time period. format is <i>yyyy-mm-dd</i>
     */
    start: Date;
}
export declare class CurrenciesHistoryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
