import { SpeakeasyBase } from "../../../internal/utils";
export declare class LocalDisk extends SpeakeasyBase {
    /**
     * Specifies the number of such disks.
     */
    diskCount?: number;
    /**
     * Specifies the size of the disk in base-2 GB.
     */
    diskSizeGb?: number;
    /**
     * Specifies the desired disk type on the node. This disk type must be a local storage type (e.g.: local-ssd). Note that for nodeTemplates, this should be the name of the disk type and not its URL.
     */
    diskType?: string;
}
