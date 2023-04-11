import { SpeakeasyBase } from "../../../internal/utils";
/**
 * NFS export.
 */
export declare class NfsExport extends SpeakeasyBase {
    /**
     * The directory being exported.
     */
    exportDirectory?: string;
    /**
     * The hosts or networks to which the export is being shared.
     */
    hosts?: string[];
}
