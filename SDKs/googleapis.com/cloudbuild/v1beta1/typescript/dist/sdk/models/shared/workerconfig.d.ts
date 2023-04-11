import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the configuration to be used for creating workers in the pool.
 */
export declare class WorkerConfig extends SpeakeasyBase {
    /**
     * Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.
     */
    diskSizeGb?: string;
    /**
     * Machine type of a worker, such as `n1-standard-1`. See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.
     */
    machineType?: string;
    /**
     * If true, workers are created without any public address, which prevents network egress to public IPs.
     */
    noExternalIp?: boolean;
}
