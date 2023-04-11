import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud Storage location where the input will be read from.
 */
export declare class GoogleCloudVisionV1p2beta1GcsSource extends SpeakeasyBase {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string;
}
