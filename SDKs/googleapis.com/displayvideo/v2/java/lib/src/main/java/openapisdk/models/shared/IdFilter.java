package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdFilter
 * A filtering option that filters entities by their entity IDs.
**/
public class IdFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adGroupAdIds")
    public String[] adGroupAdIds;
    public IdFilter withAdGroupAdIds(String[] adGroupAdIds) {
        this.adGroupAdIds = adGroupAdIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adGroupIds")
    public String[] adGroupIds;
    public IdFilter withAdGroupIds(String[] adGroupIds) {
        this.adGroupIds = adGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIds")
    public String[] campaignIds;
    public IdFilter withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderIds")
    public String[] insertionOrderIds;
    public IdFilter withInsertionOrderIds(String[] insertionOrderIds) {
        this.insertionOrderIds = insertionOrderIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemIds")
    public String[] lineItemIds;
    public IdFilter withLineItemIds(String[] lineItemIds) {
        this.lineItemIds = lineItemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaProductIds")
    public String[] mediaProductIds;
    public IdFilter withMediaProductIds(String[] mediaProductIds) {
        this.mediaProductIds = mediaProductIds;
        return this;
    }
}