import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how to attach a disk to a Replica.
 */
export declare class DiskAttachment extends SpeakeasyBase {
    /**
     * The device name of this disk.
     */
    deviceName?: string;
    /**
     * A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.
     */
    index?: number;
}
