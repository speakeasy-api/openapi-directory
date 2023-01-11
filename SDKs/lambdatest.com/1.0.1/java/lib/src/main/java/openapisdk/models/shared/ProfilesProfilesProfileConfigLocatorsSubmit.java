package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfilesProfilesProfileConfigLocatorsSubmit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ProfilesProfilesProfileConfigLocatorsSubmit withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ProfilesProfilesProfileConfigLocatorsSubmit withValue(String value) {
        this.value = value;
        return this;
    }
}