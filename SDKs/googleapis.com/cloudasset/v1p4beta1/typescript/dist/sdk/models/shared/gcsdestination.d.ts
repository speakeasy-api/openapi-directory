import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Cloud Storage location.
 */
export declare class GcsDestination extends SpeakeasyBase {
    /**
     * Required. The uri of the Cloud Storage object. It's the same uri that is used by gsutil. For example: "gs://bucket_name/object_name". See [Quickstart: Using the gsutil tool] (https://cloud.google.com/storage/docs/quickstart-gsutil) for examples.
     */
    uri?: string;
}
