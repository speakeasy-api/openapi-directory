import { SpeakeasyBase } from "../../../internal/utils";
/**
 * predefined_role is the Kubernetes default role to use
 */
export declare enum RolePredefinedRoleEnum {
    Unknown = "UNKNOWN",
    Admin = "ADMIN",
    Edit = "EDIT",
    View = "VIEW"
}
/**
 * Role is the type for Kubernetes roles
 */
export declare class Role extends SpeakeasyBase {
    /**
     * predefined_role is the Kubernetes default role to use
     */
    predefinedRole?: RolePredefinedRoleEnum;
}
