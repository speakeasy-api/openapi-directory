package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CandlestickSeries
 * The series of a CandlestickData.
**/
public class CandlestickSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ChartData data;
    public CandlestickSeries withData(ChartData data) {
        this.data = data;
        return this;
    }
}