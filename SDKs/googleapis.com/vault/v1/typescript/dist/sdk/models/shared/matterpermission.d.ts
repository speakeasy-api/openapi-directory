import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user's role for the matter.
 */
export declare enum MatterPermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Collaborator = "COLLABORATOR",
    Owner = "OWNER"
}
/**
 * Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
 */
export declare class MatterPermission extends SpeakeasyBase {
    /**
     * The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).
     */
    accountId?: string;
    /**
     * The user's role for the matter.
     */
    role?: MatterPermissionRoleEnum;
}
