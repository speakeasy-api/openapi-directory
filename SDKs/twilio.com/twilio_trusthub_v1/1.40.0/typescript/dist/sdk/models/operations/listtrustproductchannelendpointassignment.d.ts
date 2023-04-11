import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTrustProductChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an channel endpoint
     */
    channelEndpointSid?: string;
    /**
     * comma separated list of channel endpoint sids
     */
    channelEndpointSids?: string;
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
     * The unique string that we created to identify the CustomerProfile resource.
     */
    trustProductSid: string;
}
export declare class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
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
export declare class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    meta?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta;
    results?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment[];
}
export declare class ListTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTrustProductChannelEndpointAssignmentResponse?: ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
