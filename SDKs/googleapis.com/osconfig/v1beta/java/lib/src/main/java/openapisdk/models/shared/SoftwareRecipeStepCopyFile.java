package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepCopyFile
 * Copies the artifact to the specified path on the instance.
**/
public class SoftwareRecipeStepCopyFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public SoftwareRecipeStepCopyFile withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public SoftwareRecipeStepCopyFile withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overwrite")
    public Boolean overwrite;
    public SoftwareRecipeStepCopyFile withOverwrite(Boolean overwrite) {
        this.overwrite = overwrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String permissions;
    public SoftwareRecipeStepCopyFile withPermissions(String permissions) {
        this.permissions = permissions;
        return this;
    }
}