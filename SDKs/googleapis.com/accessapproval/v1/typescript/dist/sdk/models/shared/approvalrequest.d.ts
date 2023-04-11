import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLocations } from "./accesslocations";
import { AccessReason } from "./accessreason";
import { ApproveDecision } from "./approvedecision";
import { DismissDecision } from "./dismissdecision";
import { ResourceProperties } from "./resourceproperties";
/**
 * A request for the customer to approve access to a resource.
 */
export declare class ApprovalRequest extends SpeakeasyBase {
    /**
     * A decision that has been made to approve access to a resource.
     */
    approve?: ApproveDecision;
    /**
     * A decision that has been made to dismiss an approval request.
     */
    dismiss?: DismissDecision;
    /**
     * The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}".
     */
    name?: string;
    /**
     * The time at which approval was requested.
     */
    requestTime?: string;
    /**
     * The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.
     */
    requestedExpiration?: string;
    /**
     * Home office and physical location of the principal.
     */
    requestedLocations?: AccessLocations;
    requestedReason?: AccessReason;
    /**
     * The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.
     */
    requestedResourceName?: string;
    /**
     * The properties associated with the resource of the request.
     */
    requestedResourceProperties?: ResourceProperties;
}
