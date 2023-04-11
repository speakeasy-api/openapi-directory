import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListContentAndApprovalsServerList: readonly ["https://content.twilio.com"];
export declare class ListContentAndApprovalsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListContentAndApprovalsRequest extends SpeakeasyBase {
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
export declare class ListContentAndApprovalsListContentAndApprovalsResponseMeta extends SpeakeasyBase {
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
export declare class ListContentAndApprovalsListContentAndApprovalsResponse extends SpeakeasyBase {
    contents?: shared.ContentV1ContentAndApprovals[];
    meta?: ListContentAndApprovalsListContentAndApprovalsResponseMeta;
}
export declare class ListContentAndApprovalsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listContentAndApprovalsResponse?: ListContentAndApprovalsListContentAndApprovalsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
