package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepInstallDpkg
 * Installs a deb via dpkg.
**/
public class SoftwareRecipeStepInstallDpkg {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public SoftwareRecipeStepInstallDpkg withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}