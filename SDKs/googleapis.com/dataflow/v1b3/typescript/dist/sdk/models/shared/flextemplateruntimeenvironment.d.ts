import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The algorithm to use for autoscaling
 */
export declare enum FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum {
    AutoscalingAlgorithmUnknown = "AUTOSCALING_ALGORITHM_UNKNOWN",
    AutoscalingAlgorithmNone = "AUTOSCALING_ALGORITHM_NONE",
    AutoscalingAlgorithmBasic = "AUTOSCALING_ALGORITHM_BASIC"
}
/**
 * Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs
 */
export declare enum FlexTemplateRuntimeEnvironmentFlexrsGoalEnum {
    FlexrsUnspecified = "FLEXRS_UNSPECIFIED",
    FlexrsSpeedOptimized = "FLEXRS_SPEED_OPTIMIZED",
    FlexrsCostOptimized = "FLEXRS_COST_OPTIMIZED"
}
/**
 * Configuration for VM IPs.
 */
export declare enum FlexTemplateRuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
/**
 * The environment values to be set at runtime for flex template.
 */
export declare class FlexTemplateRuntimeEnvironment extends SpeakeasyBase {
    /**
     * Additional experiment flags for the job.
     */
    additionalExperiments?: string[];
    /**
     * Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.
     */
    additionalUserLabels?: Record<string, string>;
    /**
     * The algorithm to use for autoscaling
     */
    autoscalingAlgorithm?: FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;
    /**
     * Worker disk size, in gigabytes.
     */
    diskSizeGb?: number;
    /**
     * If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file.
     */
    dumpHeapOnOom?: boolean;
    /**
     * If true serial port logging will be enabled for the launcher VM.
     */
    enableLauncherVmSerialPortLogging?: boolean;
    /**
     * Whether to enable Streaming Engine for the job.
     */
    enableStreamingEngine?: boolean;
    /**
     * Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs
     */
    flexrsGoal?: FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
    /**
     * Configuration for VM IPs.
     */
    ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
    /**
     * Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/
     */
    kmsKeyName?: string;
    /**
     * The machine type to use for launching the job. The default is n1-standard-1.
     */
    launcherMachineType?: string;
    /**
     * The machine type to use for the job. Defaults to the value from the template if not specified.
     */
    machineType?: string;
    /**
     * The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
     */
    maxWorkers?: number;
    /**
     * Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
     */
    network?: string;
    /**
     * The initial number of Google Compute Engine instances for the job.
     */
    numWorkers?: number;
    /**
     * Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that `dump_heap_on_oom` is set to true.
     */
    saveHeapDumpsToGcsPath?: string;
    /**
     * Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.
     */
    sdkContainerImage?: string;
    /**
     * The email address of the service account to run the job as.
     */
    serviceAccountEmail?: string;
    /**
     * The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    stagingLocation?: string;
    /**
     * Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
     */
    subnetwork?: string;
    /**
     * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    tempLocation?: string;
    /**
     * The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.
     */
    workerRegion?: string;
    /**
     * The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
     */
    workerZone?: string;
    /**
     * The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.
     */
    zone?: string;
}
