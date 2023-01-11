package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Profile
 * Profile resource.
**/
public class Profile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public Deployment deployment;
    public Profile withDeployment(Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public Profile withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Profile withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Profile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileBytes")
    public String profileBytes;
    public Profile withProfileBytes(String profileBytes) {
        this.profileBytes = profileBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileType")
    public ProfileProfileTypeEnum profileType;
    public Profile withProfileType(ProfileProfileTypeEnum profileType) {
        this.profileType = profileType;
        return this;
    }
}