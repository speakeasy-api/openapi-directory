package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingAlgorithmInput
 * A single custom bidding algorithm.
**/
public class CustomBiddingAlgorithmInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public CustomBiddingAlgorithmInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithmType")
    public CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum customBiddingAlgorithmType;
    public CustomBiddingAlgorithmInput withCustomBiddingAlgorithmType(CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum customBiddingAlgorithmType) {
        this.customBiddingAlgorithmType = customBiddingAlgorithmType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CustomBiddingAlgorithmInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public CustomBiddingAlgorithmEntityStatusEnum entityStatus;
    public CustomBiddingAlgorithmInput withEntityStatus(CustomBiddingAlgorithmEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public CustomBiddingAlgorithmInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedAdvertiserIds")
    public String[] sharedAdvertiserIds;
    public CustomBiddingAlgorithmInput withSharedAdvertiserIds(String[] sharedAdvertiserIds) {
        this.sharedAdvertiserIds = sharedAdvertiserIds;
        return this;
    }
}