package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfilesProfiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProfilesProfiles withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile_config")
    public ProfilesProfilesProfileConfig profileConfig;
    public ProfilesProfiles withProfileConfig(ProfilesProfilesProfileConfig profileConfig) {
        this.profileConfig = profileConfig;
        return this;
    }
}