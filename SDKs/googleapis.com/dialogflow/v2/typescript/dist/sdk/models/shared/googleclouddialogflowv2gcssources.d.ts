import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Cloud Storage location for the inputs.
 */
export declare class GoogleCloudDialogflowV2GcsSources extends SpeakeasyBase {
    /**
     * Required. Google Cloud Storage URIs for the inputs. A URI is of the form: gs://bucket/object-prefix-or-name Whether a prefix or name is used depends on the use case.
     */
    uris?: string[];
}
