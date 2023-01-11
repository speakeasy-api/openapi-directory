package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CandlestickDomain
 * The domain of a CandlestickChart.
**/
public class CandlestickDomain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ChartData data;
    public CandlestickDomain withData(ChartData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reversed")
    public Boolean reversed;
    public CandlestickDomain withReversed(Boolean reversed) {
        this.reversed = reversed;
        return this;
    }
}