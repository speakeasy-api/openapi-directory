package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProfileRequest
 * CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected. 
**/
public class CreateProfileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public Deployment deployment;
    public CreateProfileRequest withDeployment(Deployment deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileType")
    public CreateProfileRequestProfileTypeEnum[] profileType;
    public CreateProfileRequest withProfileType(CreateProfileRequestProfileTypeEnum[] profileType) {
        this.profileType = profileType;
        return this;
    }
}