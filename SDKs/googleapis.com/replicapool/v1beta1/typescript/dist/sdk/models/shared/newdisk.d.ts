import { SpeakeasyBase } from "../../../internal/utils";
import { DiskAttachment } from "./diskattachment";
import { NewDiskInitializeParams } from "./newdiskinitializeparams";
/**
 * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
 */
export declare class NewDisk extends SpeakeasyBase {
    /**
     * Specifies how to attach a disk to a Replica.
     */
    attachment?: DiskAttachment;
    /**
     * If true, then this disk will be deleted when the instance is deleted. The default value is true.
     */
    autoDelete?: boolean;
    /**
     * If true, indicates that this is the root persistent disk.
     */
    boot?: boolean;
    /**
     * Initialization parameters for creating a new disk.
     */
    initializeParams?: NewDiskInitializeParams;
}
