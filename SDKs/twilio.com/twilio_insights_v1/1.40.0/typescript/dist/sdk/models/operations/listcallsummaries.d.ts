import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCallSummariesServerList: readonly ["https://insights.twilio.com"];
export declare class ListCallSummariesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCallSummariesRequest extends SpeakeasyBase {
    abnormalSession?: boolean;
    branded?: boolean;
    callState?: string;
    callType?: string;
    direction?: string;
    endTime?: string;
    from?: string;
    fromCarrier?: string;
    fromCountryCode?: string;
    hasTag?: boolean;
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
    processingState?: shared.CallSummariesEnumProcessingStateRequestEnum;
    sortBy?: shared.CallSummariesEnumSortByEnum;
    startTime?: string;
    subaccount?: string;
    to?: string;
    toCarrier?: string;
    toCountryCode?: string;
    verifiedCaller?: boolean;
}
export declare class ListCallSummariesListCallSummariesResponseMeta extends SpeakeasyBase {
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
export declare class ListCallSummariesListCallSummariesResponse extends SpeakeasyBase {
    callSummaries?: shared.InsightsV1CallSummaries[];
    meta?: ListCallSummariesListCallSummariesResponseMeta;
}
export declare class ListCallSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCallSummariesResponse?: ListCallSummariesListCallSummariesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
