import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRoleInput } from "./assigneduserrole";
/**
 * Request message for BulkEditAssignedUserRoles.
 */
export declare class BulkEditAssignedUserRolesRequestInput extends SpeakeasyBase {
    /**
     * The assigned user roles to create in batch, specified as a list of AssignedUserRoles.
     */
    createdAssignedUserRoles?: AssignedUserRoleInput[];
    /**
     * The assigned user roles to delete in batch, specified as a list of assigned_user_role_ids. The format of assigned_user_role_id is `entityType-entityid`, for example `partner-123`.
     */
    deletedAssignedUserRoles?: string[];
}
