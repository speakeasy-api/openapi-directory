import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An expansion file. The resource for ExpansionFilesService.
 */
export declare class ExpansionFile extends SpeakeasyBase {
    /**
     * If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.
     */
    fileSize?: string;
    /**
     * If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.
     */
    referencesVersion?: number;
}
