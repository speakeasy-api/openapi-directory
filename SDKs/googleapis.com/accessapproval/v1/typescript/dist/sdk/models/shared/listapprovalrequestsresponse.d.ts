import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRequest } from "./approvalrequest";
/**
 * Response to listing of ApprovalRequest objects.
 */
export declare class ListApprovalRequestsResponse extends SpeakeasyBase {
    /**
     * Approval request details.
     */
    approvalRequests?: ApprovalRequest[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more.
     */
    nextPageToken?: string;
}
