import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionSpec } from "./executionspec";
import { ExecutionStatus } from "./executionstatus";
import { ObjectMeta } from "./objectmeta";
/**
 * Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
 */
export declare class Execution extends SpeakeasyBase {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * ExecutionSpec describes how the execution will look.
     */
    spec?: ExecutionSpec;
    /**
     * ExecutionStatus represents the current state of an Execution.
     */
    status?: ExecutionStatus;
}
