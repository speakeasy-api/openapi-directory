package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CandlestickData
 * The Candlestick chart data, each containing the low, open, close, and high values for a series.
**/
public class CandlestickData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeSeries")
    public CandlestickSeries closeSeries;
    public CandlestickData withCloseSeries(CandlestickSeries closeSeries) {
        this.closeSeries = closeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highSeries")
    public CandlestickSeries highSeries;
    public CandlestickData withHighSeries(CandlestickSeries highSeries) {
        this.highSeries = highSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowSeries")
    public CandlestickSeries lowSeries;
    public CandlestickData withLowSeries(CandlestickSeries lowSeries) {
        this.lowSeries = lowSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openSeries")
    public CandlestickSeries openSeries;
    public CandlestickData withOpenSeries(CandlestickSeries openSeries) {
        this.openSeries = openSeries;
        return this;
    }
}