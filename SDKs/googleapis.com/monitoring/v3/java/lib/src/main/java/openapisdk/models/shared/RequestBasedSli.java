package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestBasedSli
 * Service Level Indicators for which atomic units of service are counted directly.
**/
public class RequestBasedSli {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionCut")
    public DistributionCut distributionCut;
    public RequestBasedSli withDistributionCut(DistributionCut distributionCut) {
        this.distributionCut = distributionCut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goodTotalRatio")
    public TimeSeriesRatio goodTotalRatio;
    public RequestBasedSli withGoodTotalRatio(TimeSeriesRatio goodTotalRatio) {
        this.goodTotalRatio = goodTotalRatio;
        return this;
    }
}