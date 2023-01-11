package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Campaign data;
    public CampaignResponse withData(Campaign data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public CampaignResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}