import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Installs an MSI file.
 */
export declare class SoftwareRecipeStepInstallMsi extends SpeakeasyBase {
    /**
     * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
     */
    allowedExitCodes?: number[];
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string;
    /**
     * The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag).
     */
    flags?: string[];
}
