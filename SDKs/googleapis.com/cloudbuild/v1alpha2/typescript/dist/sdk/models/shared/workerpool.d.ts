import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";
/**
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
 */
export declare class WorkerPoolInput extends SpeakeasyBase {
    /**
     * Network describes the network configuration for a `WorkerPool`.
     */
    networkConfig?: NetworkConfig;
    /**
     * Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.
     */
    region?: string;
    /**
     * WorkerConfig defines the configuration to be used for a creating workers in the pool.
     */
    workerConfig?: WorkerConfig;
}
/**
 * Output only. WorkerPool state.
 */
export declare enum WorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Deleting = "DELETING",
    Deleted = "DELETED"
}
/**
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
 */
export declare class WorkerPool extends SpeakeasyBase {
    /**
     * Output only. Time at which the request to create the `WorkerPool` was received.
     */
    createTime?: string;
    /**
     * Output only. Time at which the request to delete the `WorkerPool` was received.
     */
    deleteTime?: string;
    /**
     * Output only. The resource name of the `WorkerPool`. Format of the name is `projects/{project_id}/workerPools/{worker_pool_id}`, where the value of {worker_pool_id} is provided in the CreateWorkerPool request.
     */
    name?: string;
    /**
     * Network describes the network configuration for a `WorkerPool`.
     */
    networkConfig?: NetworkConfig;
    /**
     * Required. Immutable. The region where the `WorkerPool` runs. Only "us-central1" is currently supported. Note that `region` cannot be changed once the `WorkerPool` is created.
     */
    region?: string;
    /**
     * Output only. WorkerPool state.
     */
    state?: WorkerPoolStateEnum;
    /**
     * Output only. Time at which the request to update the `WorkerPool` was received.
     */
    updateTime?: string;
    /**
     * WorkerConfig defines the configuration to be used for a creating workers in the pool.
     */
    workerConfig?: WorkerConfig;
}
