import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a file available as a Cloud Storage Object.
 */
export declare class OSPolicyResourceFileGcs extends SpeakeasyBase {
    /**
     * Required. Bucket of the Cloud Storage object.
     */
    bucket?: string;
    /**
     * Generation number of the Cloud Storage object.
     */
    generation?: string;
    /**
     * Required. Name of the Cloud Storage object.
     */
    object?: string;
}
