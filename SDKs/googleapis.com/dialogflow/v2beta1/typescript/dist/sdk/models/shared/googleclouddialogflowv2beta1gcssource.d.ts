import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Cloud Storage location for single input.
 */
export declare class GoogleCloudDialogflowV2beta1GcsSource extends SpeakeasyBase {
    /**
     * Required. The Google Cloud Storage URIs for the inputs. A URI is of the form: gs://bucket/object-prefix-or-name Whether a prefix or name is used depends on the use case.
     */
    uri?: string;
}
