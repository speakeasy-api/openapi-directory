import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";
/**
 * Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
 */
export declare class WorkerPoolInput extends SpeakeasyBase {
    /**
     * User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
     */
    displayName?: string;
    /**
     * Network describes the network configuration for a `WorkerPool`.
     */
    networkConfig?: NetworkConfig;
    /**
     * Defines the configuration to be used for creating workers in the pool.
     */
    workerConfig?: WorkerConfig;
}
/**
 * Output only. `WorkerPool` state.
 */
export declare enum WorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Deleting = "DELETING",
    Deleted = "DELETED"
}
/**
 * Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
 */
export declare class WorkerPool extends SpeakeasyBase {
    /**
     * User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Time at which the request to create the `WorkerPool` was received.
     */
    createTime?: string;
    /**
     * Output only. Time at which the request to delete the `WorkerPool` was received.
     */
    deleteTime?: string;
    /**
     * A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
     */
    displayName?: string;
    /**
     * Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed.
     */
    name?: string;
    /**
     * Network describes the network configuration for a `WorkerPool`.
     */
    networkConfig?: NetworkConfig;
    /**
     * Output only. `WorkerPool` state.
     */
    state?: WorkerPoolStateEnum;
    /**
     * Output only. A unique identifier for the `WorkerPool`.
     */
    uid?: string;
    /**
     * Output only. Time at which the request to update the `WorkerPool` was received.
     */
    updateTime?: string;
    /**
     * Defines the configuration to be used for creating workers in the pool.
     */
    workerConfig?: WorkerConfig;
}
