import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListItemAssignmentServerList: readonly ["https://numbers.twilio.com"];
export declare class ListItemAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListItemAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
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
export declare class ListItemAssignmentListItemAssignmentResponseMeta extends SpeakeasyBase {
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
export declare class ListItemAssignmentListItemAssignmentResponse extends SpeakeasyBase {
    meta?: ListItemAssignmentListItemAssignmentResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment[];
}
export declare class ListItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listItemAssignmentResponse?: ListItemAssignmentListItemAssignmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
