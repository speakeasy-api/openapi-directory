import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * The geographic scope of the disk. Defaults to `SCOPE_ZONAL` if not specified.
 */
export declare enum PersistentDiskScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeZonal = "SCOPE_ZONAL",
    ScopeRegional = "SCOPE_REGIONAL"
}
/**
 * Specification of a persistent disk attached to a VM.
 */
export declare class PersistentDisk extends SpeakeasyBase {
    /**
     * An amount of usage over a time frame.
     */
    diskSize?: Usage;
    /**
     * The [disk type](https://cloud.google.com/compute/docs/disks#disk-types). For example: "pd-standard".
     */
    diskType?: string;
    /**
     * An amount of usage over a time frame.
     */
    provisionedIops?: Usage;
    /**
     * The geographic scope of the disk. Defaults to `SCOPE_ZONAL` if not specified.
     */
    scope?: PersistentDiskScopeEnum;
}
