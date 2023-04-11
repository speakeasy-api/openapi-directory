import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Executes an artifact or local file.
 */
export declare class SoftwareRecipeStepExecFile extends SpeakeasyBase {
    /**
     * Defaults to [0]. A list of possible return values that the program can return to indicate a success.
     */
    allowedExitCodes?: number[];
    /**
     * Arguments to be passed to the provided executable.
     */
    args?: string[];
    /**
     * The id of the relevant artifact in the recipe.
     */
    artifactId?: string;
    /**
     * The absolute path of the file on the local filesystem.
     */
    localPath?: string;
}
