package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignRequestTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public CampaignRequestTriggerCodeEnum code;
    public CampaignRequestTrigger withCode(CampaignRequestTriggerCodeEnum code) {
        this.code = code;
        return this;
    }
}