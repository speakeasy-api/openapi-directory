package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuditAdvertiserResponse
 * Response message for AdvertiserService.AuditAdvertiser.
**/
public class AuditAdvertiserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adGroupCriteriaCount")
    public String adGroupCriteriaCount;
    public AuditAdvertiserResponse withAdGroupCriteriaCount(String adGroupCriteriaCount) {
        this.adGroupCriteriaCount = adGroupCriteriaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignCriteriaCount")
    public String campaignCriteriaCount;
    public AuditAdvertiserResponse withCampaignCriteriaCount(String campaignCriteriaCount) {
        this.campaignCriteriaCount = campaignCriteriaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelsCount")
    public String channelsCount;
    public AuditAdvertiserResponse withChannelsCount(String channelsCount) {
        this.channelsCount = channelsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywordListsCount")
    public String negativeKeywordListsCount;
    public AuditAdvertiserResponse withNegativeKeywordListsCount(String negativeKeywordListsCount) {
        this.negativeKeywordListsCount = negativeKeywordListsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativelyTargetedChannelsCount")
    public String negativelyTargetedChannelsCount;
    public AuditAdvertiserResponse withNegativelyTargetedChannelsCount(String negativelyTargetedChannelsCount) {
        this.negativelyTargetedChannelsCount = negativelyTargetedChannelsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedCampaignsCount")
    public String usedCampaignsCount;
    public AuditAdvertiserResponse withUsedCampaignsCount(String usedCampaignsCount) {
        this.usedCampaignsCount = usedCampaignsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedInsertionOrdersCount")
    public String usedInsertionOrdersCount;
    public AuditAdvertiserResponse withUsedInsertionOrdersCount(String usedInsertionOrdersCount) {
        this.usedInsertionOrdersCount = usedInsertionOrdersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedLineItemsCount")
    public String usedLineItemsCount;
    public AuditAdvertiserResponse withUsedLineItemsCount(String usedLineItemsCount) {
        this.usedLineItemsCount = usedLineItemsCount;
        return this;
    }
}