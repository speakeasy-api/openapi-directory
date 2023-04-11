import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location for the output content.
 */
export declare class GcsOutputDestination extends SpeakeasyBase {
    /**
     * Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`. The requesting user must have write permission to the bucket. The directory will be created if it doesn't exist.
     */
    outputUriPrefix?: string;
}
