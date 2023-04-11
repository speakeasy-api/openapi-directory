import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request to upload an artifact.
 */
export declare class UploadKfpArtifactRequest extends SpeakeasyBase {
    /**
     * Description of the package version.
     */
    description?: string;
    /**
     * Tags to be created with the version.
     */
    tags?: string[];
}
