package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileInput
 * Profile resource.
**/
public class ProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public Deployment deployment;
    public ProfileInput withDeployment(Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ProfileInput withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ProfileInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileBytes")
    public String profileBytes;
    public ProfileInput withProfileBytes(String profileBytes) {
        this.profileBytes = profileBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileType")
    public ProfileProfileTypeEnum profileType;
    public ProfileInput withProfileType(ProfileProfileTypeEnum profileType) {
        this.profileType = profileType;
        return this;
    }
}