package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CombinedAudienceGroup
 * Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
**/
public class CombinedAudienceGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CombinedAudienceTargetingSetting[] settings;
    public CombinedAudienceGroup withSettings(CombinedAudienceTargetingSetting[] settings) {
        this.settings = settings;
        return this;
    }
}