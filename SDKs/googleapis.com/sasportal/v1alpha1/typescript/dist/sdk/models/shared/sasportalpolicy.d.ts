import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalAssignment } from "./sasportalassignment";
/**
 * Defines an access control policy to the resources.
 */
export declare class SasPortalPolicy extends SpeakeasyBase {
    /**
     * List of assignments
     */
    assignments?: SasPortalAssignment[];
    /**
     * The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly.
     */
    etag?: string;
}
