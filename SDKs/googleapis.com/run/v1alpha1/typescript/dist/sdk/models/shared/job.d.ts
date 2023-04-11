import { SpeakeasyBase } from "../../../internal/utils";
import { JobSpec } from "./jobspec";
import { JobStatus } from "./jobstatus";
import { ObjectMeta } from "./objectmeta";
/**
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional
     */
    apiVersion?: string;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * JobSpec describes how the job execution will look like.
     */
    spec?: JobSpec;
    /**
     * JobStatus represents the current state of a Job.
     */
    status?: JobStatus;
}
