import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale } from "./googledevtoolsremotebuildexecutionadminv1alphaautoscale";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerconfig";
/**
 * Output only. State of the worker pool.
 */
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Inactive = "INACTIVE"
}
/**
 * A worker pool resource in the Remote Build Execution API.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool extends SpeakeasyBase {
    /**
     * Autoscale defines the autoscaling policy of a worker pool.
     */
    autoscale?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;
    /**
     * Channel specifies the release channel of the pool.
     */
    channel?: string;
    /**
     * HostOS specifies the OS version of the image for the worker VMs.
     */
    hostOs?: string;
    /**
     * WorkerPool resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. name should not be populated when creating a worker pool since it is provided in the `poolId` field.
     */
    name?: string;
    /**
     * Output only. State of the worker pool.
     */
    state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
    /**
     * Defines the configuration to be used for creating workers in the worker pool.
     */
    workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
    /**
     * The desired number of workers in the worker pool. Must be a value between 0 and 15000.
     */
    workerCount?: string;
}
