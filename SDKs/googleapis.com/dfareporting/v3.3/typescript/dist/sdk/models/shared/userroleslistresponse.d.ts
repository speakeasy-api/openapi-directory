import { SpeakeasyBase } from "../../../internal/utils";
import { UserRole } from "./userrole";
/**
 * User Role List Response
 */
export declare class UserRolesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * User role collection.
     */
    userRoles?: UserRole[];
}
