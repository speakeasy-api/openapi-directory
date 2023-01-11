package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAudienceGroup
 * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
**/
public class GoogleAudienceGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public GoogleAudienceTargetingSetting[] settings;
    public GoogleAudienceGroup withSettings(GoogleAudienceTargetingSetting[] settings) {
        this.settings = settings;
        return this;
    }
}