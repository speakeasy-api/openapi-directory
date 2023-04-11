import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The export file in Cloud Storage
 */
export declare class CloudStorageFile extends SpeakeasyBase {
    /**
     * The name of the Cloud Storage bucket for the export file. You can use this value in the [Cloud Storage JSON or XML APIs](https://cloud.google.com/storage/docs/apis), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name.
     */
    bucketName?: string;
    /**
     * The md5 hash of the file.
     */
    md5Hash?: string;
    /**
     * The name of the Cloud Storage object for the export file. You can use this value in the [Cloud Storage JSON or XML APIs](https://cloud.google.com/storage/docs/apis).
     */
    objectName?: string;
    /**
     * The export file size.
     */
    size?: string;
}
