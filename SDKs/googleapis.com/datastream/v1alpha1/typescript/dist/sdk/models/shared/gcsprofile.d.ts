import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Storage bucket profile.
 */
export declare class GcsProfile extends SpeakeasyBase {
    /**
     * Required. The full project and resource path for Cloud Storage bucket including the name.
     */
    bucketName?: string;
    /**
     * The root path inside the Cloud Storage bucket.
     */
    rootPath?: string;
}
