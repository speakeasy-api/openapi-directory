import { SpeakeasyBase } from "../../../internal/utils";
import { ListConstraint } from "./listconstraint";
/**
 * The evaluation behavior of this constraint in the absence of 'Policy'.
 */
export declare enum ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question.
 */
export declare class Constraint extends SpeakeasyBase {
    /**
     * A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance.
     */
    booleanConstraint?: Record<string, any>;
    /**
     * The evaluation behavior of this constraint in the absence of 'Policy'.
     */
    constraintDefault?: ConstraintConstraintDefaultEnum;
    /**
     * Detailed description of what this `Constraint` controls as well as how and where it is enforced. Mutable.
     */
    description?: string;
    /**
     * The human readable name. Mutable.
     */
    displayName?: string;
    /**
     * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
     */
    listConstraint?: ListConstraint;
    /**
     * Immutable value, required to globally be unique. For example, `constraints/serviceuser.services`
     */
    name?: string;
    /**
     * Version of the `Constraint`. Default version is 0;
     */
    version?: number;
}
