import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMetricServerList: readonly ["https://insights.twilio.com"];
export declare class ListMetricSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMetricRequest extends SpeakeasyBase {
    callSid: string;
    direction?: shared.MetricEnumStreamDirectionEnum;
    edge?: shared.MetricEnumTwilioEdgeEnum;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListMetricListMetricResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListMetricListMetricResponse extends SpeakeasyBase {
    meta?: ListMetricListMetricResponseMeta;
    metrics?: shared.InsightsV1CallMetric[];
}
export declare class ListMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMetricResponse?: ListMetricListMetricResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
