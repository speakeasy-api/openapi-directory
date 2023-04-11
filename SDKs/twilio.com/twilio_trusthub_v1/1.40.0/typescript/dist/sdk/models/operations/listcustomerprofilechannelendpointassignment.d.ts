import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an channel endpoint
     */
    channelEndpointSid?: string;
    /**
     * comma separated list of channel endpoint sids
     */
    channelEndpointSids?: string;
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
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
export declare class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta extends SpeakeasyBase {
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
export declare class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta;
    results?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[];
}
export declare class ListCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCustomerProfileChannelEndpointAssignmentResponse?: ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
