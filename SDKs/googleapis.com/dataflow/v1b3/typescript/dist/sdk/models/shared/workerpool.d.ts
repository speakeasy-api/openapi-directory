import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingSettings } from "./autoscalingsettings";
import { Disk } from "./disk";
import { Package } from "./package";
import { SDKHarnessContainerImage } from "./sdkharnesscontainerimage";
import { TaskRunnerSettings } from "./taskrunnersettings";
/**
 * The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language.
 */
export declare enum WorkerPoolDefaultPackageSetEnum {
    DefaultPackageSetUnknown = "DEFAULT_PACKAGE_SET_UNKNOWN",
    DefaultPackageSetNone = "DEFAULT_PACKAGE_SET_NONE",
    DefaultPackageSetJava = "DEFAULT_PACKAGE_SET_JAVA",
    DefaultPackageSetPython = "DEFAULT_PACKAGE_SET_PYTHON"
}
/**
 * Configuration for VM IPs.
 */
export declare enum WorkerPoolIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
/**
 * Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default.
 */
export declare enum WorkerPoolTeardownPolicyEnum {
    TeardownPolicyUnknown = "TEARDOWN_POLICY_UNKNOWN",
    TeardownAlways = "TEARDOWN_ALWAYS",
    TeardownOnSuccess = "TEARDOWN_ON_SUCCESS",
    TeardownNever = "TEARDOWN_NEVER"
}
/**
 * Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
 */
export declare class WorkerPool extends SpeakeasyBase {
    /**
     * Settings for WorkerPool autoscaling.
     */
    autoscalingSettings?: AutoscalingSettings;
    /**
     * Data disks that are used by a VM in this workflow.
     */
    dataDisks?: Disk[];
    /**
     * The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language.
     */
    defaultPackageSet?: WorkerPoolDefaultPackageSetEnum;
    /**
     * Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default.
     */
    diskSizeGb?: number;
    /**
     * Fully qualified source image for disks.
     */
    diskSourceImage?: string;
    /**
     * Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default.
     */
    diskType?: string;
    /**
     * Configuration for VM IPs.
     */
    ipConfiguration?: WorkerPoolIpConfigurationEnum;
    /**
     * The kind of the worker pool; currently only `harness` and `shuffle` are supported.
     */
    kind?: string;
    /**
     * Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default.
     */
    machineType?: string;
    /**
     * Metadata to set on the Google Compute Engine VMs.
     */
    metadata?: Record<string, string>;
    /**
     * Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
     */
    network?: string;
    /**
     * The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming).
     */
    numThreadsPerWorker?: number;
    /**
     * Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default.
     */
    numWorkers?: number;
    /**
     * The action to take on host maintenance, as defined by the Google Compute Engine API.
     */
    onHostMaintenance?: string;
    /**
     * Packages to be installed on workers.
     */
    packages?: Package[];
    /**
     * Extra arguments for this worker pool.
     */
    poolArgs?: Record<string, any>;
    /**
     * Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries.
     */
    sdkHarnessContainerImages?: SDKHarnessContainerImage[];
    /**
     * Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK".
     */
    subnetwork?: string;
    /**
     * Taskrunner configuration settings.
     */
    taskrunnerSettings?: TaskRunnerSettings;
    /**
     * Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default.
     */
    teardownPolicy?: WorkerPoolTeardownPolicyEnum;
    /**
     * Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead.
     */
    workerHarnessContainerImage?: string;
    /**
     * Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default.
     */
    zone?: string;
}
