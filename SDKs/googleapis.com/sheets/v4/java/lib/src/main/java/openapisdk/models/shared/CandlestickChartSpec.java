package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CandlestickChartSpec
 * A candlestick chart.
**/
public class CandlestickChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CandlestickData[] data;
    public CandlestickChartSpec withData(CandlestickData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public CandlestickDomain domain;
    public CandlestickChartSpec withDomain(CandlestickDomain domain) {
        this.domain = domain;
        return this;
    }
}