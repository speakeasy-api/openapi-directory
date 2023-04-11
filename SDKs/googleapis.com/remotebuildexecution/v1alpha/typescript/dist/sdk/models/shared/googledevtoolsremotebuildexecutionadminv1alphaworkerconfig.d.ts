import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaacceleratorconfig";
/**
 * Defines the configuration to be used for creating workers in the worker pool.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig extends SpeakeasyBase {
    /**
     * AcceleratorConfig defines the accelerator cards to attach to the VM.
     */
    accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;
    /**
     * Required. Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/
     */
    diskSizeGb?: string;
    /**
     * Required. Disk Type to use for the worker. See [Storage options](https://cloud.google.com/compute/docs/disks/#introduction). Currently only `pd-standard` and `pd-ssd` are supported.
     */
    diskType?: string;
    /**
     * Labels associated with the workers. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International letters are permitted. Label keys must start with a letter. Label values are optional. There can not be more than 64 labels per resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Machine type of the worker, such as `e2-standard-2`. See https://cloud.google.com/compute/docs/machine-types for a list of supported machine types. Note that `f1-micro` and `g1-small` are not yet supported.
     */
    machineType?: string;
    /**
     * The maximum number of actions a worker can execute concurrently.
     */
    maxConcurrentActions?: string;
    /**
     * Minimum CPU platform to use when creating the worker. See [CPU Platforms](https://cloud.google.com/compute/docs/cpu-platforms).
     */
    minCpuPlatform?: string;
    /**
     * Determines the type of network access granted to workers. Possible values: - "public": Workers can connect to the public internet. - "private": Workers can only connect to Google APIs and services. - "restricted-private": Workers can only connect to Google APIs that are reachable through `restricted.googleapis.com` (`199.36.153.4/30`).
     */
    networkAccess?: string;
    /**
     * Determines whether the worker is reserved (equivalent to a Compute Engine on-demand VM and therefore won't be preempted). See [Preemptible VMs](https://cloud.google.com/preemptible-vms/) for more details.
     */
    reserved?: boolean;
    /**
     * The node type name to be used for sole-tenant nodes.
     */
    soleTenantNodeType?: string;
    /**
     * The name of the image used by each VM.
     */
    vmImage?: string;
}
