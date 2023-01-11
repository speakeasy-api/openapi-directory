package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetItems200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetItems200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_current")
    public Long countCurrent;
    public GetItems200ApplicationJson withCountCurrent(Long countCurrent) {
        this.countCurrent = countCurrent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_limited")
    public Boolean isLimited;
    public GetItems200ApplicationJson withIsLimited(Boolean isLimited) {
        this.isLimited = isLimited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_url")
    public String nextUrl;
    public GetItems200ApplicationJson withNextUrl(String nextUrl) {
        this.nextUrl = nextUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_duration_ms")
    public Long queryDurationMs;
    public GetItems200ApplicationJson withQueryDurationMs(Long queryDurationMs) {
        this.queryDurationMs = queryDurationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Item[] results;
    public GetItems200ApplicationJson withResults(openapisdk.models.shared.Item[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetItems200ApplicationJson withUrl(String url) {
        this.url = url;
        return this;
    }
}