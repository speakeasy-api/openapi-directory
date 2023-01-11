package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingAlgorithm
 * A single custom bidding algorithm.
**/
public class CustomBiddingAlgorithm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public CustomBiddingAlgorithm withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public CustomBiddingAlgorithm withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithmType")
    public CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum customBiddingAlgorithmType;
    public CustomBiddingAlgorithm withCustomBiddingAlgorithmType(CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum customBiddingAlgorithmType) {
        this.customBiddingAlgorithmType = customBiddingAlgorithmType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CustomBiddingAlgorithm withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public CustomBiddingAlgorithmEntityStatusEnum entityStatus;
    public CustomBiddingAlgorithm withEntityStatus(CustomBiddingAlgorithmEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelDetails")
    public CustomBiddingModelDetails[] modelDetails;
    public CustomBiddingAlgorithm withModelDetails(CustomBiddingModelDetails[] modelDetails) {
        this.modelDetails = modelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomBiddingAlgorithm withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public CustomBiddingAlgorithm withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedAdvertiserIds")
    public String[] sharedAdvertiserIds;
    public CustomBiddingAlgorithm withSharedAdvertiserIds(String[] sharedAdvertiserIds) {
        this.sharedAdvertiserIds = sharedAdvertiserIds;
        return this;
    }
}