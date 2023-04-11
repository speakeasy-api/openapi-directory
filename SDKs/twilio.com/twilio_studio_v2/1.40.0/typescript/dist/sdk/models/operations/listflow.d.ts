import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFlowServerList: readonly ["https://studio.twilio.com"];
export declare class ListFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFlowRequest extends SpeakeasyBase {
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
export declare class ListFlowListFlowResponseMeta extends SpeakeasyBase {
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
export declare class ListFlowListFlowResponse extends SpeakeasyBase {
    flows?: shared.StudioV2Flow[];
    meta?: ListFlowListFlowResponseMeta;
}
export declare class ListFlowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFlowResponse?: ListFlowListFlowResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
