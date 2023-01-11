package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepExecFile
 * Executes an artifact or local file.
**/
public class SoftwareRecipeStepExecFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedExitCodes")
    public Integer[] allowedExitCodes;
    public SoftwareRecipeStepExecFile withAllowedExitCodes(Integer[] allowedExitCodes) {
        this.allowedExitCodes = allowedExitCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public SoftwareRecipeStepExecFile withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public SoftwareRecipeStepExecFile withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPath")
    public String localPath;
    public SoftwareRecipeStepExecFile withLocalPath(String localPath) {
        this.localPath = localPath;
        return this;
    }
}