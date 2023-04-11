import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignment } from "./ospolicyassignment";
/**
 * A response message for listing all revisions for a OS policy assignment.
 */
export declare class ListOSPolicyAssignmentRevisionsResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of OS policy assignment revisions.
     */
    nextPageToken?: string;
    /**
     * The OS policy assignment revisions
     */
    osPolicyAssignments?: OSPolicyAssignment[];
}
