package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepInstallRpm
 * Installs an rpm file via the rpm utility.
**/
public class SoftwareRecipeStepInstallRpm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public SoftwareRecipeStepInstallRpm withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}