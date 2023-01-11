package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignWrapped {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback")
    public String callback;
    public CampaignWrapped withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public CampaignWrapped withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Campaign[] results;
    public CampaignWrapped withResults(Campaign[] results) {
        this.results = results;
        return this;
    }
}