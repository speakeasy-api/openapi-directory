package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public CampaignRequestFilters filters;
    public CampaignRequest withFilters(CampaignRequestFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public CampaignRequest withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public CampaignRequestTrigger trigger;
    public CampaignRequest withTrigger(CampaignRequestTrigger trigger) {
        this.trigger = trigger;
        return this;
    }
}