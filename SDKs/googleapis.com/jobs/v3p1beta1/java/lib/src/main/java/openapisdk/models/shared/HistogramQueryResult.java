package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramQueryResult
 * Output only. Histogram result that matches HistogramSpec specified in searches.
**/
public class HistogramQueryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogram")
    public java.util.Map<String, String> histogram;
    public HistogramQueryResult withHistogram(java.util.Map<String, String> histogram) {
        this.histogram = histogram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramQuery")
    public String histogramQuery;
    public HistogramQueryResult withHistogramQuery(String histogramQuery) {
        this.histogramQuery = histogramQuery;
        return this;
    }
}