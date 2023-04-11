import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message representing a single file or path in Cloud Storage.
 */
export declare class GooglePrivacyDlpV2CloudStoragePath extends SpeakeasyBase {
    /**
     * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
     */
    path?: string;
}
