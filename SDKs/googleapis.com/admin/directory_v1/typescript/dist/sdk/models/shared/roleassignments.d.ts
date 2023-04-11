import { SpeakeasyBase } from "../../../internal/utils";
import { RoleAssignment } from "./roleassignment";
/**
 * Successful response
 */
export declare class RoleAssignments extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of RoleAssignment resources.
     */
    items?: RoleAssignment[];
    /**
     * The type of the API resource. This is always `admin#directory#roleAssignments`.
     */
    kind?: string;
    nextPageToken?: string;
}
