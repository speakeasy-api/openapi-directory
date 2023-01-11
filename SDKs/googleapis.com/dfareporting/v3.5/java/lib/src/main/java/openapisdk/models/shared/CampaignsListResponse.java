package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignsListResponse
 * Campaign List Response
**/
public class CampaignsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaigns")
    public Campaign[] campaigns;
    public CampaignsListResponse withCampaigns(Campaign[] campaigns) {
        this.campaigns = campaigns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CampaignsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CampaignsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}