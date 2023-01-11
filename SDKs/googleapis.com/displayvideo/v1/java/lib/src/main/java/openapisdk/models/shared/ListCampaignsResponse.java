package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCampaignsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaigns")
    public Campaign[] campaigns;
    public ListCampaignsResponse withCampaigns(Campaign[] campaigns) {
        this.campaigns = campaigns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCampaignsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}