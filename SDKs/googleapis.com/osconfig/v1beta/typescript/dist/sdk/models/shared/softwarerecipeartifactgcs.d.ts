import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an artifact available as a Google Cloud Storage object.
 */
export declare class SoftwareRecipeArtifactGcs extends SpeakeasyBase {
    /**
     * Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`.
     */
    bucket?: string;
    /**
     * Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`.
     */
    generation?: string;
    /**
     * Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`.
     */
    object?: string;
}
