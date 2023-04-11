import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location for the output content.
 */
export declare class GcsDestination extends SpeakeasyBase {
    /**
     * Required. There must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://", otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    outputUriPrefix?: string;
}
