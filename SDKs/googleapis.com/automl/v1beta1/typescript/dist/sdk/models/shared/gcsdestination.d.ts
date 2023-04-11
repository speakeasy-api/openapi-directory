import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location where the output is to be written to.
 */
export declare class GcsDestination extends SpeakeasyBase {
    /**
     * Required. Google Cloud Storage URI to output directory, up to 2000 characters long. Accepted forms: * Prefix path: gs://bucket/directory The requesting user must have write permission to the bucket. The directory is created if it doesn't exist.
     */
    outputUriPrefix?: string;
}
