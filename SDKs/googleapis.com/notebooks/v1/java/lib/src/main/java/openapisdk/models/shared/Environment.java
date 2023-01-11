package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * Definition of a software environment that is used to start a notebook instance.
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImage")
    public ContainerImage containerImage;
    public Environment withContainerImage(ContainerImage containerImage) {
        this.containerImage = containerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Environment withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Environment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Environment withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Environment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScript")
    public String postStartupScript;
    public Environment withPostStartupScript(String postStartupScript) {
        this.postStartupScript = postStartupScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmImage")
    public VmImage vmImage;
    public Environment withVmImage(VmImage vmImage) {
        this.vmImage = vmImage;
        return this;
    }
}