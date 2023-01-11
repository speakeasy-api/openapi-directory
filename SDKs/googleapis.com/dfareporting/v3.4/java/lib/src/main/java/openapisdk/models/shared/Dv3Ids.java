package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dv3Ids
 * DV360 IDs related to the custom event.
**/
public class Dv3Ids {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dvCampaignId")
    public String dvCampaignId;
    public Dv3Ids withDvCampaignId(String dvCampaignId) {
        this.dvCampaignId = dvCampaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dvCreativeId")
    public String dvCreativeId;
    public Dv3Ids withDvCreativeId(String dvCreativeId) {
        this.dvCreativeId = dvCreativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dvInsertionOrderId")
    public String dvInsertionOrderId;
    public Dv3Ids withDvInsertionOrderId(String dvInsertionOrderId) {
        this.dvInsertionOrderId = dvInsertionOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dvLineItemId")
    public String dvLineItemId;
    public Dv3Ids withDvLineItemId(String dvLineItemId) {
        this.dvLineItemId = dvLineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dvSiteId")
    public String dvSiteId;
    public Dv3Ids withDvSiteId(String dvSiteId) {
        this.dvSiteId = dvSiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Dv3Ids withKind(String kind) {
        this.kind = kind;
        return this;
    }
}