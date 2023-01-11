package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipe
 * A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
**/
public class SoftwareRecipe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifacts")
    public SoftwareRecipeArtifact[] artifacts;
    public SoftwareRecipe withArtifacts(SoftwareRecipeArtifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredState")
    public SoftwareRecipeDesiredStateEnum desiredState;
    public SoftwareRecipe withDesiredState(SoftwareRecipeDesiredStateEnum desiredState) {
        this.desiredState = desiredState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installSteps")
    public SoftwareRecipeStep[] installSteps;
    public SoftwareRecipe withInstallSteps(SoftwareRecipeStep[] installSteps) {
        this.installSteps = installSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SoftwareRecipe withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateSteps")
    public SoftwareRecipeStep[] updateSteps;
    public SoftwareRecipe withUpdateSteps(SoftwareRecipeStep[] updateSteps) {
        this.updateSteps = updateSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public SoftwareRecipe withVersion(String version) {
        this.version = version;
        return this;
    }
}