package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepInstallMsi
 * Installs an MSI file.
**/
public class SoftwareRecipeStepInstallMsi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedExitCodes")
    public Integer[] allowedExitCodes;
    public SoftwareRecipeStepInstallMsi withAllowedExitCodes(Integer[] allowedExitCodes) {
        this.allowedExitCodes = allowedExitCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public SoftwareRecipeStepInstallMsi withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public String[] flags;
    public SoftwareRecipeStepInstallMsi withFlags(String[] flags) {
        this.flags = flags;
        return this;
    }
}