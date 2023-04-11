import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRole } from "./assigneduserrole";
/**
 * Successful response
 */
export declare class BulkEditAssignedUserRolesResponse extends SpeakeasyBase {
    /**
     * The list of assigned user roles that have been successfully created. This list will be absent if empty.
     */
    createdAssignedUserRoles?: AssignedUserRole[];
}
