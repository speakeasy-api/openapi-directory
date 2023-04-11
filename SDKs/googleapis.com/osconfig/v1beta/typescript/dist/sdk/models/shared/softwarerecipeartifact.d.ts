import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeArtifactGcs } from "./softwarerecipeartifactgcs";
import { SoftwareRecipeArtifactRemote } from "./softwarerecipeartifactremote";
/**
 * Specifies a resource to be used in the recipe.
 */
export declare class SoftwareRecipeArtifact extends SpeakeasyBase {
    /**
     * Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified.
     */
    allowInsecure?: boolean;
    /**
     * Specifies an artifact available as a Google Cloud Storage object.
     */
    gcs?: SoftwareRecipeArtifactGcs;
    /**
     * Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id.
     */
    id?: string;
    /**
     * Specifies an artifact available via some URI.
     */
    remote?: SoftwareRecipeArtifactRemote;
}
