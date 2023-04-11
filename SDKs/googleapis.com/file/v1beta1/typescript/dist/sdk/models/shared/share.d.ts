import { SpeakeasyBase } from "../../../internal/utils";
import { NfsExportOptions } from "./nfsexportoptions";
/**
 * Output only. The share state.
 */
export declare enum ShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING"
}
/**
 * A Filestore share.
 */
export declare class Share extends SpeakeasyBase {
    /**
     * File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. Must be greater than 0.
     */
    capacityGb?: string;
    /**
     * Output only. The time when the share was created.
     */
    createTime?: string;
    /**
     * A description of the share with 2048 characters or less. Requests with longer descriptions will be rejected.
     */
    description?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * The mount name of the share. Must be 63 characters or less and consist of uppercase or lowercase letters, numbers, and underscores.
     */
    mountName?: string;
    /**
     * Output only. The resource name of the share, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/shares/{share_id}`.
     */
    name?: string;
    /**
     * Nfs Export Options. There is a limit of 10 export options per file share.
     */
    nfsExportOptions?: NfsExportOptions[];
    /**
     * Output only. The share state.
     */
    state?: ShareStateEnum;
}
/**
 * A Filestore share.
 */
export declare class ShareInput extends SpeakeasyBase {
    /**
     * File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. Must be greater than 0.
     */
    capacityGb?: string;
    /**
     * A description of the share with 2048 characters or less. Requests with longer descriptions will be rejected.
     */
    description?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * The mount name of the share. Must be 63 characters or less and consist of uppercase or lowercase letters, numbers, and underscores.
     */
    mountName?: string;
    /**
     * Nfs Export Options. There is a limit of 10 export options per file share.
     */
    nfsExportOptions?: NfsExportOptions[];
}
