import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allow or deny type.
 */
export declare enum GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
export declare enum GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
/**
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
 */
export declare class GoogleCloudOrgpolicyV2CustomConstraint extends SpeakeasyBase {
    /**
     * Allow or deny type.
     */
    actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;
    /**
     * Org policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.
     */
    condition?: string;
    /**
     * Detailed information about this custom policy constraint. The max length of the description is 2000 characters.
     */
    description?: string;
    /**
     * One line display name for the UI. The max length of the display_name is 200 characters.
     */
    displayName?: string;
    /**
     * All the operations being applied for this constraint.
     */
    methodTypes?: GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[];
    /**
     * Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.
     */
    name?: string;
    /**
     * Immutable. The resource instance type on which this policy applies. Format will be of the form : "/" Example: * `compute.googleapis.com/Instance`.
     */
    resourceTypes?: string[];
    /**
     * Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` RPC was called
     */
    updateTime?: string;
}
/**
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
 */
export declare class GoogleCloudOrgpolicyV2CustomConstraintInput extends SpeakeasyBase {
    /**
     * Allow or deny type.
     */
    actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;
    /**
     * Org policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.
     */
    condition?: string;
    /**
     * Detailed information about this custom policy constraint. The max length of the description is 2000 characters.
     */
    description?: string;
    /**
     * One line display name for the UI. The max length of the display_name is 200 characters.
     */
    displayName?: string;
    /**
     * All the operations being applied for this constraint.
     */
    methodTypes?: GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[];
    /**
     * Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.
     */
    name?: string;
    /**
     * Immutable. The resource instance type on which this policy applies. Format will be of the form : "/" Example: * `compute.googleapis.com/Instance`.
     */
    resourceTypes?: string[];
}
