import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a StoredInfoType to use with scanning.
 */
export declare class GooglePrivacyDlpV2StoredType extends SpeakeasyBase {
    /**
     * Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system.
     */
    createTime?: string;
    /**
     * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
     */
    name?: string;
}
