package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAudienceTargetingSetting
 * Details of Google audience targeting setting.
**/
public class GoogleAudienceTargetingSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAudienceId")
    public String googleAudienceId;
    public GoogleAudienceTargetingSetting withGoogleAudienceId(String googleAudienceId) {
        this.googleAudienceId = googleAudienceId;
        return this;
    }
}