package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignCreativeAssociationsListResponse
 * Campaign Creative Association List Response
**/
public class CampaignCreativeAssociationsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignCreativeAssociations")
    public CampaignCreativeAssociation[] campaignCreativeAssociations;
    public CampaignCreativeAssociationsListResponse withCampaignCreativeAssociations(CampaignCreativeAssociation[] campaignCreativeAssociations) {
        this.campaignCreativeAssociations = campaignCreativeAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CampaignCreativeAssociationsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CampaignCreativeAssociationsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}