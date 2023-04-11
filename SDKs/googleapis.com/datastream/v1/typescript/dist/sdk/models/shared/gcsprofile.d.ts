import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Storage bucket profile.
 */
export declare class GcsProfile extends SpeakeasyBase {
    /**
     * Required. The Cloud Storage bucket name.
     */
    bucket?: string;
    /**
     * The root path inside the Cloud Storage bucket.
     */
    rootPath?: string;
}
