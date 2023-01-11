package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstAndThirdPartyAudienceTargetingSetting
 * Details of first and third party audience targeting setting.
**/
public class FirstAndThirdPartyAudienceTargetingSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAndThirdPartyAudienceId")
    public String firstAndThirdPartyAudienceId;
    public FirstAndThirdPartyAudienceTargetingSetting withFirstAndThirdPartyAudienceId(String firstAndThirdPartyAudienceId) {
        this.firstAndThirdPartyAudienceId = firstAndThirdPartyAudienceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recency")
    public FirstAndThirdPartyAudienceTargetingSettingRecencyEnum recency;
    public FirstAndThirdPartyAudienceTargetingSetting withRecency(FirstAndThirdPartyAudienceTargetingSettingRecencyEnum recency) {
        this.recency = recency;
        return this;
    }
}