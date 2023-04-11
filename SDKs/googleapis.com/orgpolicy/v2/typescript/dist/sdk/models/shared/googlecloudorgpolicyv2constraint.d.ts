import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2ConstraintListConstraint } from "./googlecloudorgpolicyv2constraintlistconstraint";
/**
 * The evaluation behavior of this constraint in the absence of a policy.
 */
export declare enum GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * A constraint describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which Google Cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization policy administrator to fit the needs of the organization by setting a policy that includes constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. Constraints have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a policy being defined or inherited for the resource in question.
 */
export declare class GoogleCloudOrgpolicyV2Constraint extends SpeakeasyBase {
    /**
     * A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance.
     */
    booleanConstraint?: Record<string, any>;
    /**
     * The evaluation behavior of this constraint in the absence of a policy.
     */
    constraintDefault?: GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum;
    /**
     * Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.
     */
    description?: string;
    /**
     * The human readable name. Mutable.
     */
    displayName?: string;
    /**
     * A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy.
     */
    listConstraint?: GoogleCloudOrgpolicyV2ConstraintListConstraint;
    /**
     * Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/{project_number}/constraints/{constraint_name}` * `folders/{folder_id}/constraints/{constraint_name}` * `organizations/{organization_id}/constraints/{constraint_name}` For example, "/projects/123/constraints/compute.disableSerialPortAccess".
     */
    name?: string;
    /**
     * Shows if dry run is supported for this constraint or not.
     */
    supportsDryRun?: boolean;
}
