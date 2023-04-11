import { SpeakeasyBase } from "../../../internal/utils";
import { GceConfidentialInstanceConfig } from "./gceconfidentialinstanceconfig";
import { GceShieldedInstanceConfig } from "./gceshieldedinstanceconfig";
/**
 * A runtime using a Compute Engine instance.
 */
export declare class GceInstance extends SpeakeasyBase {
    /**
     * Size of the boot disk in GB.
     */
    bootDiskSizeGb?: number;
    /**
     * A set of Compute Engine Confidential VM instance options.
     */
    confidentialInstanceConfig?: GceConfidentialInstanceConfig;
    /**
     * Whether instances have no public IP address.
     */
    disablePublicIpAddresses?: boolean;
    /**
     * The name of a Compute Engine machine type.
     */
    machineType?: string;
    /**
     * Number of instances to pool for faster workstation starup.
     */
    poolSize?: number;
    /**
     * Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.
     */
    serviceAccount?: string;
    /**
     * A set of Compute Engine Shielded instance options.
     */
    shieldedInstanceConfig?: GceShieldedInstanceConfig;
    /**
     * Network tags to add to the Compute Engine machines backing the Workstations.
     */
    tags?: string[];
}
