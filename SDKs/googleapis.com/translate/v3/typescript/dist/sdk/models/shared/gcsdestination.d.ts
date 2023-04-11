import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location for the output content.
 */
export declare class GcsDestination extends SpeakeasyBase {
    /**
     * Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    outputUriPrefix?: string;
}
