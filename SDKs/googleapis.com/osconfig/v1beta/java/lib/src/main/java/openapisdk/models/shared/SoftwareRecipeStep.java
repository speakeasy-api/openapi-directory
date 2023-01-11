package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStep
 * An action that can be taken as part of installing or updating a recipe.
**/
public class SoftwareRecipeStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveExtraction")
    public SoftwareRecipeStepExtractArchive archiveExtraction;
    public SoftwareRecipeStep withArchiveExtraction(SoftwareRecipeStepExtractArchive archiveExtraction) {
        this.archiveExtraction = archiveExtraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpkgInstallation")
    public SoftwareRecipeStepInstallDpkg dpkgInstallation;
    public SoftwareRecipeStep withDpkgInstallation(SoftwareRecipeStepInstallDpkg dpkgInstallation) {
        this.dpkgInstallation = dpkgInstallation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileCopy")
    public SoftwareRecipeStepCopyFile fileCopy;
    public SoftwareRecipeStep withFileCopy(SoftwareRecipeStepCopyFile fileCopy) {
        this.fileCopy = fileCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileExec")
    public SoftwareRecipeStepExecFile fileExec;
    public SoftwareRecipeStep withFileExec(SoftwareRecipeStepExecFile fileExec) {
        this.fileExec = fileExec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msiInstallation")
    public SoftwareRecipeStepInstallMsi msiInstallation;
    public SoftwareRecipeStep withMsiInstallation(SoftwareRecipeStepInstallMsi msiInstallation) {
        this.msiInstallation = msiInstallation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rpmInstallation")
    public SoftwareRecipeStepInstallRpm rpmInstallation;
    public SoftwareRecipeStep withRpmInstallation(SoftwareRecipeStepInstallRpm rpmInstallation) {
        this.rpmInstallation = rpmInstallation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptRun")
    public SoftwareRecipeStepRunScript scriptRun;
    public SoftwareRecipeStep withScriptRun(SoftwareRecipeStepRunScript scriptRun) {
        this.scriptRun = scriptRun;
        return this;
    }
}