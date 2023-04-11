import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class ListRateLimitSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRateLimitRequest extends SpeakeasyBase {
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
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
}
export declare class ListRateLimitListRateLimitResponseMeta extends SpeakeasyBase {
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
export declare class ListRateLimitListRateLimitResponse extends SpeakeasyBase {
    meta?: ListRateLimitListRateLimitResponseMeta;
    rateLimits?: shared.VerifyV2ServiceRateLimit[];
}
export declare class ListRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRateLimitResponse?: ListRateLimitListRateLimitResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
