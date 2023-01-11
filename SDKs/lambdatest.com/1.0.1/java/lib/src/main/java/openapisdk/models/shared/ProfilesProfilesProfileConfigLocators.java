package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfilesProfilesProfileConfigLocators {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public ProfilesProfilesProfileConfigLocatorsPassword password;
    public ProfilesProfilesProfileConfigLocators withPassword(ProfilesProfilesProfileConfigLocatorsPassword password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submit")
    public ProfilesProfilesProfileConfigLocatorsSubmit submit;
    public ProfilesProfilesProfileConfigLocators withSubmit(ProfilesProfilesProfileConfigLocatorsSubmit submit) {
        this.submit = submit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public ProfilesProfilesProfileConfigLocatorsUsername username;
    public ProfilesProfilesProfileConfigLocators withUsername(ProfilesProfilesProfileConfigLocatorsUsername username) {
        this.username = username;
        return this;
    }
}