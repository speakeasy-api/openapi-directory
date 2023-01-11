package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileSettings
 * Profile settings
**/
public class ProfileSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProfileSettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileVisible")
    public Boolean profileVisible;
    public ProfileSettings withProfileVisible(Boolean profileVisible) {
        this.profileVisible = profileVisible;
        return this;
    }
}