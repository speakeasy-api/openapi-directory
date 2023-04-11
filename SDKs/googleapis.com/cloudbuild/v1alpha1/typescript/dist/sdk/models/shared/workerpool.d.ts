import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerConfig } from "./workerconfig";
export declare enum WorkerPoolRegionsEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    UsCentral1 = "us-central1",
    UsWest1 = "us-west1",
    UsEast1 = "us-east1",
    UsEast4 = "us-east4"
}
/**
 * Output only. WorkerPool Status.
 */
export declare enum WorkerPoolStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
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
     * User-defined name of the `WorkerPool`.
     */
    name?: string;
    /**
     * The project ID of the GCP project for which the `WorkerPool` is created.
     */
    projectId?: string;
    /**
     * List of regions to create the `WorkerPool`. Regions can't be empty. If Cloud Build adds a new GCP region in the future, the existing `WorkerPool` will not be enabled in the new region automatically; you must add the new region to the `regions` field to enable the `WorkerPool` in that region.
     */
    regions?: WorkerPoolRegionsEnum[];
    /**
     * Output only. The service account used to manage the `WorkerPool`. The service account must have the Compute Instance Admin (Beta) permission at the project level.
     */
    serviceAccountEmail?: string;
    /**
     * Output only. WorkerPool Status.
     */
    status?: WorkerPoolStatusEnum;
    /**
     * Output only. Time at which the request to update the `WorkerPool` was received.
     */
    updateTime?: string;
    /**
     * WorkerConfig defines the configuration to be used for a creating workers in the pool.
     */
    workerConfig?: WorkerConfig;
    /**
     * Total number of workers to be created across all requested regions.
     */
    workerCount?: string;
}
