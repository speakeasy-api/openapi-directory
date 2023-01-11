package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CombinedAudienceTargetingSetting
 * Details of combined audience targeting setting.
**/
public class CombinedAudienceTargetingSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combinedAudienceId")
    public String combinedAudienceId;
    public CombinedAudienceTargetingSetting withCombinedAudienceId(String combinedAudienceId) {
        this.combinedAudienceId = combinedAudienceId;
        return this;
    }
}