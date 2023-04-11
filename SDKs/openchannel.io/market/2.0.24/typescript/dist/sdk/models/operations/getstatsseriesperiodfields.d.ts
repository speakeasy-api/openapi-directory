import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The period for the series (day or month)
 */
export declare enum GetStatsSeriesPeriodFieldsPeriodEnum {
    Day = "day",
    Month = "month"
}
export declare class GetStatsSeriesPeriodFieldsRequest extends SpeakeasyBase {
    /**
     * The end date for this series (in millis)
     */
    end?: number;
    /**
     * The field to be graphed. This also be a comma separated list of fields and the result will be a single timeseries containing the sum of all fields.
     */
    fields: string;
    /**
     * The period for the series (day or month)
     */
    period: GetStatsSeriesPeriodFieldsPeriodEnum;
    /**
     * A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112
     */
    query?: string;
    /**
     * The start date for this series (in millis)
     */
    start?: number;
}
export declare class GetStatsSeriesPeriodFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
