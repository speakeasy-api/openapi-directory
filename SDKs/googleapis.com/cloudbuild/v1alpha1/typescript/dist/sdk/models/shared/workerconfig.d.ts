import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * WorkerConfig defines the configuration to be used for a creating workers in the pool.
 */
export declare class WorkerConfig extends SpeakeasyBase {
    /**
     * Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size. `disk_size` is overridden if you specify a different disk size in `build_options`. In this case, a VM with a disk size specified in the `build_options` will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds#buildoptions
     */
    diskSizeGb?: string;
    /**
     * Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool. `machine_type` is overridden if you specify a different machine type in `build_options`. In this case, the VM specified in the `build_options` will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/speeding-up-builds#using_custom_virtual_machine_sizes
     */
    machineType?: string;
    /**
     * Network describes the GCP network used to create workers in.
     */
    network?: Network;
    /**
     * The tag applied to the worker, and the same tag used by the firewall rule. It is used to identify the Cloud Build workers among other VMs. The default value for tag is `worker`.
     */
    tag?: string;
}
