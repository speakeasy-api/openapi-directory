import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Google Cloud Storage volume.
 */
export declare class Gcs extends SpeakeasyBase {
    /**
     * Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/
     */
    remotePath?: string;
}
