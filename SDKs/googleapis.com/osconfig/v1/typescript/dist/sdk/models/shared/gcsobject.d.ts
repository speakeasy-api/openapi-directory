import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Storage object representation.
 */
export declare class GcsObject extends SpeakeasyBase {
    /**
     * Required. Bucket of the Cloud Storage object.
     */
    bucket?: string;
    /**
     * Required. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
     */
    generationNumber?: string;
    /**
     * Required. Name of the Cloud Storage object.
     */
    object?: string;
}
