package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Profiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profiles")
    public ProfilesProfiles[] profiles;
    public Profiles withProfiles(ProfilesProfiles[] profiles) {
        this.profiles = profiles;
        return this;
    }
}