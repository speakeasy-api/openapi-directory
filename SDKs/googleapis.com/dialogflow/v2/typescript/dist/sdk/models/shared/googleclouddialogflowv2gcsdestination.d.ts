import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Cloud Storage location for the output.
 */
export declare class GoogleCloudDialogflowV2GcsDestination extends SpeakeasyBase {
    /**
     * The Google Cloud Storage URIs for the output. A URI is of the form: gs://bucket/object-prefix-or-name Whether a prefix or name is used depends on the use case. The requesting user must have "write-permission" to the bucket.
     */
    uri?: string;
}
