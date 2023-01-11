package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TweetMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public TweetMetrics[] data;
    public TweetMetricsResponse withData(TweetMetrics[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Object[] errors;
    public TweetMetricsResponse withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
}