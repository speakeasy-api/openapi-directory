package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramQuery
 * The histogram request.
**/
public class HistogramQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramQuery")
    public String histogramQuery;
    public HistogramQuery withHistogramQuery(String histogramQuery) {
        this.histogramQuery = histogramQuery;
        return this;
    }
}