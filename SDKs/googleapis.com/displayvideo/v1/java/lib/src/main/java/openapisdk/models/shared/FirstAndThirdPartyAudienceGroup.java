package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstAndThirdPartyAudienceGroup
 * Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
**/
public class FirstAndThirdPartyAudienceGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public FirstAndThirdPartyAudienceTargetingSetting[] settings;
    public FirstAndThirdPartyAudienceGroup withSettings(FirstAndThirdPartyAudienceTargetingSetting[] settings) {
        this.settings = settings;
        return this;
    }
}