import { SpeakeasyBase } from "../../../internal/utils";
import { CloudStorageSink } from "./cloudstoragesink";
import { ExportOptions } from "./exportoptions";
import { ExportStats } from "./exportstats";
import { Query } from "./query";
import { UserInfo } from "./userinfo";
/**
 * Output only. The status of the export.
 */
export declare enum ExportStatusEnum {
    ExportStatusUnspecified = "EXPORT_STATUS_UNSPECIFIED",
    Completed = "COMPLETED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}
/**
 * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
 */
export declare class Export extends SpeakeasyBase {
    /**
     * Export sink for Cloud Storage files.
     */
    cloudStorageSink?: CloudStorageSink;
    /**
     * Output only. The time when the export was created.
     */
    createTime?: string;
    /**
     * Additional options for exports
     */
    exportOptions?: ExportOptions;
    /**
     * Output only. The generated export ID.
     */
    id?: string;
    /**
     * Output only. The matter ID.
     */
    matterId?: string;
    /**
     * The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.
     */
    name?: string;
    /**
     * The query definition used for search and export.
     */
    query?: Query;
    /**
     * User's information.
     */
    requester?: UserInfo;
    /**
     * Progress information for an export.
     */
    stats?: ExportStats;
    /**
     * Output only. The status of the export.
     */
    status?: ExportStatusEnum;
}
