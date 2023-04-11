import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Cloud Storage location.
 */
export declare class GoogleCloudAssetV1GcsDestination extends SpeakeasyBase {
    /**
     * Required. The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. If the specified Cloud Storage object already exists and there is no [hold](https://cloud.google.com/storage/docs/object-holds), it will be overwritten with the analysis result.
     */
    uri?: string;
}
