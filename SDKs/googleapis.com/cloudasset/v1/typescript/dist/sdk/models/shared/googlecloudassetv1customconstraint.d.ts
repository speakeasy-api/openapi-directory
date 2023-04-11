import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allow or deny type.
 */
export declare enum GoogleCloudAssetV1CustomConstraintActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
export declare enum GoogleCloudAssetV1CustomConstraintMethodTypesEnum {
    MethodTypeUnspecified = "METHOD_TYPE_UNSPECIFIED",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
/**
 * The definition of a custom constraint.
 */
export declare class GoogleCloudAssetV1CustomConstraint extends SpeakeasyBase {
    /**
     * Allow or deny type.
     */
    actionType?: GoogleCloudAssetV1CustomConstraintActionTypeEnum;
    /**
     * Organization Policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true`
     */
    condition?: string;
    /**
     * Detailed information about this custom policy constraint.
     */
    description?: string;
    /**
     * One line display name for the UI.
     */
    displayName?: string;
    /**
     * All the operations being applied for this constraint.
     */
    methodTypes?: GoogleCloudAssetV1CustomConstraintMethodTypesEnum[];
    /**
     * Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example : "organizations/123/customConstraints/custom.createOnlyE2TypeVms"
     */
    name?: string;
    /**
     * The Resource Instance type on which this policy applies to. Format will be of the form : "/" Example: * `compute.googleapis.com/Instance`.
     */
    resourceTypes?: string[];
}
