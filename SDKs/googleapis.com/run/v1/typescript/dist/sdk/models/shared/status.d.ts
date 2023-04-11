import { SpeakeasyBase } from "../../../internal/utils";
import { ListMeta } from "./listmeta";
import { StatusDetails } from "./statusdetails";
/**
 * Status is a return value for calls that don't return other objects.
 */
export declare class Status extends SpeakeasyBase {
    /**
     * Suggested HTTP return code for this status, 0 if not set.
     */
    code?: number;
    /**
     * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
     */
    details?: StatusDetails;
    /**
     * A human-readable description of the status of this operation.
     */
    message?: string;
    /**
     * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
     */
    metadata?: ListMeta;
    /**
     * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
     */
    reason?: string;
    /**
     * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    status?: string;
}
