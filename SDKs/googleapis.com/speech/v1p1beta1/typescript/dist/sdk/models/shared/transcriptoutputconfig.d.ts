import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an optional destination for the recognition results.
 */
export declare class TranscriptOutputConfig extends SpeakeasyBase {
    /**
     * Specifies a Cloud Storage URI for the recognition results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.
     */
    gcsUri?: string;
}
