package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignCreativeAssociation
 * Identifies a creative which has been associated with a given campaign.
**/
public class CampaignCreativeAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public CampaignCreativeAssociation withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CampaignCreativeAssociation withKind(String kind) {
        this.kind = kind;
        return this;
    }
}