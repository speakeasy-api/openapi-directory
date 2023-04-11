import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTrustProductEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTrustProductEntityAssignmentRequest extends SpeakeasyBase {
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
     * The unique string that we created to identify the TrustProduct resource.
     */
    trustProductSid: string;
}
export declare class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta extends SpeakeasyBase {
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
export declare class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    meta?: ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta;
    results?: shared.TrusthubV1TrustProductTrustProductEntityAssignment[];
}
export declare class ListTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTrustProductEntityAssignmentResponse?: ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
