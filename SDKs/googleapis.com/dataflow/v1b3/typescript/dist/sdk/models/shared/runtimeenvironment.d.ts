import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Configuration for VM IPs.
 */
export declare enum RuntimeEnvironmentIpConfigurationEnum {
    WorkerIpUnspecified = "WORKER_IP_UNSPECIFIED",
    WorkerIpPublic = "WORKER_IP_PUBLIC",
    WorkerIpPrivate = "WORKER_IP_PRIVATE"
}
/**
 * The environment values to set at runtime.
 */
export declare class RuntimeEnvironment extends SpeakeasyBase {
    /**
     * Optional. Additional experiment flags for the job, specified with the `--experiments` option.
     */
    additionalExperiments?: string[];
    /**
     * Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.
     */
    additionalUserLabels?: Record<string, string>;
    /**
     * Optional. Whether to bypass the safety checks for the job's temporary directory. Use with caution.
     */
    bypassTempDirValidation?: boolean;
    /**
     * Optional. Whether to enable Streaming Engine for the job.
     */
    enableStreamingEngine?: boolean;
    /**
     * Optional. Configuration for VM IPs.
     */
    ipConfiguration?: RuntimeEnvironmentIpConfigurationEnum;
    /**
     * Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/
     */
    kmsKeyName?: string;
    /**
     * Optional. The machine type to use for the job. Defaults to the value from the template if not specified.
     */
    machineType?: string;
    /**
     * Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1.
     */
    maxWorkers?: number;
    /**
     * Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
     */
    network?: string;
    /**
     * Optional. The initial number of Google Compute Engine instances for the job. The default value is 11.
     */
    numWorkers?: number;
    /**
     * Optional. The email address of the service account to run the job as.
     */
    serviceAccountEmail?: string;
    /**
     * Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
     */
    subnetwork?: string;
    /**
     * Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    tempLocation?: string;
    /**
     * Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.
     */
    workerRegion?: string;
    /**
     * Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
     */
    workerZone?: string;
    /**
     * Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.
     */
    zone?: string;
}
