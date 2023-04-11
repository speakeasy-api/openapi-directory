import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Cloud Storage object representation.
 */
export declare class GcsObject extends SpeakeasyBase {
    /**
     * Required. Bucket of the Google Cloud Storage object.
     */
    bucket?: string;
    /**
     * Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
     */
    generationNumber?: string;
    /**
     * Required. Name of the Google Cloud Storage object.
     */
    object?: string;
}
