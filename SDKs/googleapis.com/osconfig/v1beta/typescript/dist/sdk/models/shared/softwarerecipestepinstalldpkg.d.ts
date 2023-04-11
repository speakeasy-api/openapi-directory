import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Installs a deb via dpkg.
 */
export declare class SoftwareRecipeStepInstallDpkg extends SpeakeasyBase {
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string;
}
