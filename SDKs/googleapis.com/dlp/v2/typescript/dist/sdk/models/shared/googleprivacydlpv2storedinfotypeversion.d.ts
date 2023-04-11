import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
import { GooglePrivacyDlpV2StoredInfoTypeStats } from "./googleprivacydlpv2storedinfotypestats";
/**
 * Stored info type version state. Read-only, updated by the system during dictionary creation.
 */
export declare enum GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum {
    StoredInfoTypeStateUnspecified = "STORED_INFO_TYPE_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Ready = "READY",
    Failed = "FAILED",
    Invalid = "INVALID"
}
/**
 * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
 */
export declare class GooglePrivacyDlpV2StoredInfoTypeVersion extends SpeakeasyBase {
    /**
     * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
     */
    config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
    /**
     * Create timestamp of the version. Read-only, determined by the system when the version is created.
     */
    createTime?: string;
    /**
     * Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. For example, some of the data for stored custom dictionaries is put in the user's Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same `config` if it was not the source of the error.
     */
    errors?: GooglePrivacyDlpV2Error[];
    /**
     * Stored info type version state. Read-only, updated by the system during dictionary creation.
     */
    state?: GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum;
    /**
     * Statistics for a StoredInfoType.
     */
    stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
}
