import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1ListConstraint } from "./googlecloudassetv1listconstraint";
/**
 * The evaluation behavior of this constraint in the absence of 'Policy'.
 */
export declare enum GoogleCloudAssetV1ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * The definition of a constraint.
 */
export declare class GoogleCloudAssetV1Constraint extends SpeakeasyBase {
    /**
     * A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance.
     */
    booleanConstraint?: Record<string, any>;
    /**
     * The evaluation behavior of this constraint in the absence of 'Policy'.
     */
    constraintDefault?: GoogleCloudAssetV1ConstraintConstraintDefaultEnum;
    /**
     * Detailed description of what this `Constraint` controls as well as how and where it is enforced.
     */
    description?: string;
    /**
     * The human readable name of the constraint.
     */
    displayName?: string;
    /**
     * A `Constraint` that allows or disallows a list of string values, which are configured by an organization's policy administrator with a `Policy`.
     */
    listConstraint?: GoogleCloudAssetV1ListConstraint;
    /**
     * The unique name of the constraint. Format of the name should be * `constraints/{constraint_name}` For example, `constraints/compute.disableSerialPortAccess`.
     */
    name?: string;
}
