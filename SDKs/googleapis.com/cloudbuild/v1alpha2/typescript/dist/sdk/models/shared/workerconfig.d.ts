import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WorkerConfig defines the configuration to be used for a creating workers in the pool.
 */
export declare class WorkerConfig extends SpeakeasyBase {
    /**
     * Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size.
     */
    diskSizeGb?: string;
    /**
     * Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool.
     */
    machineType?: string;
}
