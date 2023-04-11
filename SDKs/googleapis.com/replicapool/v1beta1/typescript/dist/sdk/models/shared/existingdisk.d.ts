import { SpeakeasyBase } from "../../../internal/utils";
import { DiskAttachment } from "./diskattachment";
/**
 * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
 */
export declare class ExistingDisk extends SpeakeasyBase {
    /**
     * Specifies how to attach a disk to a Replica.
     */
    attachment?: DiskAttachment;
    /**
     * The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.
     */
    source?: string;
}
