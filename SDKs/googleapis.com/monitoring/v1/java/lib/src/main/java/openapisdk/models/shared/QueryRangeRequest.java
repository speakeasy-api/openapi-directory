package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryRangeRequest
 * QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters.
**/
public class QueryRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public QueryRangeRequest withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public QueryRangeRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public QueryRangeRequest withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step")
    public String step;
    public QueryRangeRequest withStep(String step) {
        this.step = step;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public QueryRangeRequest withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}