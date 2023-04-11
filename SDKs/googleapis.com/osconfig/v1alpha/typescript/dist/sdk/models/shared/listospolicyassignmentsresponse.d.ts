import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignment } from "./ospolicyassignment";
/**
 * A response message for listing all assignments under given parent.
 */
export declare class ListOSPolicyAssignmentsResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of OS policy assignments.
     */
    nextPageToken?: string;
    /**
     * The list of assignments
     */
    osPolicyAssignments?: OSPolicyAssignment[];
}
