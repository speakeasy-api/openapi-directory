import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEngagementServerList: readonly ["https://studio.twilio.com"];
export declare class ListEngagementSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEngagementRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow to read Engagements from.
     */
    flowSid: string;
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
export declare class ListEngagementListEngagementResponseMeta extends SpeakeasyBase {
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
export declare class ListEngagementListEngagementResponse extends SpeakeasyBase {
    engagements?: shared.StudioV1FlowEngagement[];
    meta?: ListEngagementListEngagementResponseMeta;
}
export declare class ListEngagementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEngagementResponse?: ListEngagementListEngagementResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
