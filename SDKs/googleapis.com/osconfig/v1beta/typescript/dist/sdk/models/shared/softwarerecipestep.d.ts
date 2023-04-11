import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeStepCopyFile } from "./softwarerecipestepcopyfile";
import { SoftwareRecipeStepExecFile } from "./softwarerecipestepexecfile";
import { SoftwareRecipeStepExtractArchive } from "./softwarerecipestepextractarchive";
import { SoftwareRecipeStepInstallDpkg } from "./softwarerecipestepinstalldpkg";
import { SoftwareRecipeStepInstallMsi } from "./softwarerecipestepinstallmsi";
import { SoftwareRecipeStepInstallRpm } from "./softwarerecipestepinstallrpm";
import { SoftwareRecipeStepRunScript } from "./softwarerecipesteprunscript";
/**
 * An action that can be taken as part of installing or updating a recipe.
 */
export declare class SoftwareRecipeStep extends SpeakeasyBase {
    /**
     * Extracts an archive of the type specified in the specified directory.
     */
    archiveExtraction?: SoftwareRecipeStepExtractArchive;
    /**
     * Installs a deb via dpkg.
     */
    dpkgInstallation?: SoftwareRecipeStepInstallDpkg;
    /**
     * Copies the artifact to the specified path on the instance.
     */
    fileCopy?: SoftwareRecipeStepCopyFile;
    /**
     * Executes an artifact or local file.
     */
    fileExec?: SoftwareRecipeStepExecFile;
    /**
     * Installs an MSI file.
     */
    msiInstallation?: SoftwareRecipeStepInstallMsi;
    /**
     * Installs an rpm file via the rpm utility.
     */
    rpmInstallation?: SoftwareRecipeStepInstallRpm;
    /**
     * Runs a script through an interpreter.
     */
    scriptRun?: SoftwareRecipeStepRunScript;
}
