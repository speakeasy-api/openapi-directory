import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCustomerProfileEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
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
export declare class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta extends SpeakeasyBase {
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
export declare class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta;
    results?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment[];
}
export declare class ListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCustomerProfileEntityAssignmentResponse?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
