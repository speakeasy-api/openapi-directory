import { SpeakeasyBase } from "../../../internal/utils";
import { ExistingDisk } from "./existingdisk";
import { Metadata } from "./metadata";
import { NetworkInterface } from "./networkinterface";
import { NewDisk } from "./newdisk";
import { ServiceAccount } from "./serviceaccount";
import { Tag } from "./tag";
/**
 * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
 */
export declare class VmParams extends SpeakeasyBase {
    /**
     * Deprecated. Please use baseInstanceName instead.
     */
    baseInstanceName?: string;
    /**
     * Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.
     */
    canIpForward?: boolean;
    /**
     * An optional textual description of the instance.
     */
    description?: string;
    /**
     * A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.
     */
    disksToAttach?: ExistingDisk[];
    /**
     * A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.
     */
    disksToCreate?: NewDisk[];
    /**
     * The machine type for this instance. The resource name (e.g. n1-standard-1).
     */
    machineType?: string;
    /**
     * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
     */
    metadata?: Metadata;
    /**
     * A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.
     */
    networkInterfaces?: NetworkInterface[];
    onHostMaintenance?: string;
    /**
     * A list of Service Accounts to enable for this instance.
     */
    serviceAccounts?: ServiceAccount[];
    /**
     * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
     */
    tags?: Tag;
}
