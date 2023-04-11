import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location of the source in an archive file in Google Cloud Storage.
 */
export declare class StorageSource extends SpeakeasyBase {
    /**
     * Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string;
    /**
     * Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string;
    /**
     * Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string;
}
