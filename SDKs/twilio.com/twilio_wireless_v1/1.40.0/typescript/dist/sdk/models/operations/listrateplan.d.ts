import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class ListRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRatePlanRequest extends SpeakeasyBase {
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
export declare class ListRatePlanListRatePlanResponseMeta extends SpeakeasyBase {
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
export declare class ListRatePlanListRatePlanResponse extends SpeakeasyBase {
    meta?: ListRatePlanListRatePlanResponseMeta;
    ratePlans?: shared.WirelessV1RatePlan[];
}
export declare class ListRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRatePlanResponse?: ListRatePlanListRatePlanResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
