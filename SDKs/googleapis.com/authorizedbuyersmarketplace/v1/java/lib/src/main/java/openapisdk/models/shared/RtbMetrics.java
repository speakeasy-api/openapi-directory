package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RtbMetrics
 * Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
**/
public class RtbMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adImpressions7Days")
    public String adImpressions7Days;
    public RtbMetrics withAdImpressions7Days(String adImpressions7Days) {
        this.adImpressions7Days = adImpressions7Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidRate7Days")
    public Double bidRate7Days;
    public RtbMetrics withBidRate7Days(Double bidRate7Days) {
        this.bidRate7Days = bidRate7Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidRequests7Days")
    public String bidRequests7Days;
    public RtbMetrics withBidRequests7Days(String bidRequests7Days) {
        this.bidRequests7Days = bidRequests7Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bids7Days")
    public String bids7Days;
    public RtbMetrics withBids7Days(String bids7Days) {
        this.bids7Days = bids7Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredBidRate7Days")
    public Double filteredBidRate7Days;
    public RtbMetrics withFilteredBidRate7Days(Double filteredBidRate7Days) {
        this.filteredBidRate7Days = filteredBidRate7Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mustBidRateCurrentMonth")
    public Double mustBidRateCurrentMonth;
    public RtbMetrics withMustBidRateCurrentMonth(Double mustBidRateCurrentMonth) {
        this.mustBidRateCurrentMonth = mustBidRateCurrentMonth;
        return this;
    }
}