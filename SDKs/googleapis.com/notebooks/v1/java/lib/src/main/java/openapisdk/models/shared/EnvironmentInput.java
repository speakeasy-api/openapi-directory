package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentInput
 * Definition of a software environment that is used to start a notebook instance.
**/
public class EnvironmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public ContainerImage containerImage;
    public EnvironmentInput withContainerImage(ContainerImage containerImage) {
        this.containerImage = containerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EnvironmentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public EnvironmentInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScript")
    public String postStartupScript;
    public EnvironmentInput withPostStartupScript(String postStartupScript) {
        this.postStartupScript = postStartupScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmImage")
    public VmImage vmImage;
    public EnvironmentInput withVmImage(VmImage vmImage) {
        this.vmImage = vmImage;
        return this;
    }
}