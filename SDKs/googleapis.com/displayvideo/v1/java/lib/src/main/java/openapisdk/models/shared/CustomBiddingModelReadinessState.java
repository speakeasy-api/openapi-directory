package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingModelReadinessState
 * The custom bidding algorithm model readiness state for a single shared advertiser.
**/
public class CustomBiddingModelReadinessState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public CustomBiddingModelReadinessState withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readinessState")
    public CustomBiddingModelReadinessStateReadinessStateEnum readinessState;
    public CustomBiddingModelReadinessState withReadinessState(CustomBiddingModelReadinessStateReadinessStateEnum readinessState) {
        this.readinessState = readinessState;
        return this;
    }
}