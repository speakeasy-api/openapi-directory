import { SpeakeasyBase } from "../../../internal/utils";
/**
 * V1EmployeeRole
 */
export declare class V1EmployeeRole extends SpeakeasyBase {
    /**
     * The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created.
     */
    createdAt?: string;
    /**
     * The role's unique ID, Can only be set by Square.
     */
    id?: string;
    /**
     * If true, employees with this role have all permissions, regardless of the values indicated in permissions.
     */
    isOwner?: boolean;
    /**
     * The role's merchant-defined name.
     */
    name: string;
    /**
     * The role's permissions.
     */
    permissions: string[];
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated.
     */
    updatedAt?: string;
}
