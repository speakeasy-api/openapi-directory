package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentOccurrence
 * The period during which some deployable was active in a runtime.
**/
public class DeploymentOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public DeploymentOccurrence withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public String config;
    public DeploymentOccurrence withConfig(String config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployTime")
    public String deployTime;
    public DeploymentOccurrence withDeployTime(String deployTime) {
        this.deployTime = deployTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public DeploymentOccurrencePlatformEnum platform;
    public DeploymentOccurrence withPlatform(DeploymentOccurrencePlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String[] resourceUri;
    public DeploymentOccurrence withResourceUri(String[] resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("undeployTime")
    public String undeployTime;
    public DeploymentOccurrence withUndeployTime(String undeployTime) {
        this.undeployTime = undeployTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public DeploymentOccurrence withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}