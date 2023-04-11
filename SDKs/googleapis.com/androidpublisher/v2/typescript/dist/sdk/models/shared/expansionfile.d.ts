import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class ExpansionFile extends SpeakeasyBase {
    /**
     * If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes.
     */
    fileSize?: string;
    /**
     * If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set.
     */
    referencesVersion?: number;
}
