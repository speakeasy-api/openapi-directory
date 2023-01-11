package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FinalizedDeal
 * A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
**/
public class FinalizedDeal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deal")
    public Deal deal;
    public FinalizedDeal withDeal(Deal deal) {
        this.deal = deal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealPausingInfo")
    public DealPausingInfo dealPausingInfo;
    public FinalizedDeal withDealPausingInfo(DealPausingInfo dealPausingInfo) {
        this.dealPausingInfo = dealPausingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealServingStatus")
    public FinalizedDealDealServingStatusEnum dealServingStatus;
    public FinalizedDeal withDealServingStatus(FinalizedDealDealServingStatusEnum dealServingStatus) {
        this.dealServingStatus = dealServingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FinalizedDeal withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readyToServe")
    public Boolean readyToServe;
    public FinalizedDeal withReadyToServe(Boolean readyToServe) {
        this.readyToServe = readyToServe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rtbMetrics")
    public RtbMetrics rtbMetrics;
    public FinalizedDeal withRtbMetrics(RtbMetrics rtbMetrics) {
        this.rtbMetrics = rtbMetrics;
        return this;
    }
}