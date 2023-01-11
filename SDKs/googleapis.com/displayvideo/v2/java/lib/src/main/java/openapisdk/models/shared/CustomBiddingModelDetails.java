package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingModelDetails
 * The details of a custom bidding algorithm model for a single shared advertiser.
**/
public class CustomBiddingModelDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public CustomBiddingModelDetails withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readinessState")
    public CustomBiddingModelDetailsReadinessStateEnum readinessState;
    public CustomBiddingModelDetails withReadinessState(CustomBiddingModelDetailsReadinessStateEnum readinessState) {
        this.readinessState = readinessState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionState")
    public CustomBiddingModelDetailsSuspensionStateEnum suspensionState;
    public CustomBiddingModelDetails withSuspensionState(CustomBiddingModelDetailsSuspensionStateEnum suspensionState) {
        this.suspensionState = suspensionState;
        return this;
    }
}