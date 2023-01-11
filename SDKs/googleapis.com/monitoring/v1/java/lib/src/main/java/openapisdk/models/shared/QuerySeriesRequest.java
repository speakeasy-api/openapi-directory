package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuerySeriesRequest
 * QuerySeries holds all parameters of the Prometheus upstream API for querying series.
**/
public class QuerySeriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public QuerySeriesRequest withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public QuerySeriesRequest withStart(String start) {
        this.start = start;
        return this;
    }
}