import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The type of the assignee (`USER` or `GROUP`).
 */
export declare enum RoleAssignmentAssigneeTypeEnum {
    User = "user",
    Group = "group"
}
/**
 * Defines an assignment of a role.
 */
export declare class RoleAssignment extends SpeakeasyBase {
    /**
     * The unique ID of the entity this role is assigned to—either the `user_id` of a user or the `uniqueId` of a service account, as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).
     */
    assignedTo?: string;
    /**
     * Output only. The type of the assignee (`USER` or `GROUP`).
     */
    assigneeType?: RoleAssignmentAssigneeTypeEnum;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of the API resource. This is always `admin#directory#roleAssignment`.
     */
    kind?: string;
    /**
     * If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.
     */
    orgUnitId?: string;
    /**
     * ID of this roleAssignment.
     */
    roleAssignmentId?: string;
    /**
     * The ID of the role that is assigned.
     */
    roleId?: string;
    /**
     * The scope in which this role is assigned.
     */
    scopeType?: string;
}
/**
 * Defines an assignment of a role.
 */
export declare class RoleAssignmentInput extends SpeakeasyBase {
    /**
     * The unique ID of the entity this role is assigned to—either the `user_id` of a user or the `uniqueId` of a service account, as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).
     */
    assignedTo?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of the API resource. This is always `admin#directory#roleAssignment`.
     */
    kind?: string;
    /**
     * If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.
     */
    orgUnitId?: string;
    /**
     * ID of this roleAssignment.
     */
    roleAssignmentId?: string;
    /**
     * The ID of the role that is assigned.
     */
    roleId?: string;
    /**
     * The scope in which this role is assigned.
     */
    scopeType?: string;
}
