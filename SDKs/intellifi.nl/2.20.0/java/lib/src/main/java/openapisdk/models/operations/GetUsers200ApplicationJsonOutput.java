package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsers200ApplicationJsonOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetUsers200ApplicationJsonOutput withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_current")
    public Long countCurrent;
    public GetUsers200ApplicationJsonOutput withCountCurrent(Long countCurrent) {
        this.countCurrent = countCurrent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_limited")
    public Boolean isLimited;
    public GetUsers200ApplicationJsonOutput withIsLimited(Boolean isLimited) {
        this.isLimited = isLimited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_url")
    public String nextUrl;
    public GetUsers200ApplicationJsonOutput withNextUrl(String nextUrl) {
        this.nextUrl = nextUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_duration_ms")
    public Long queryDurationMs;
    public GetUsers200ApplicationJsonOutput withQueryDurationMs(Long queryDurationMs) {
        this.queryDurationMs = queryDurationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.UserOutput[] results;
    public GetUsers200ApplicationJsonOutput withResults(openapisdk.models.shared.UserOutput[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetUsers200ApplicationJsonOutput withUrl(String url) {
        this.url = url;
        return this;
    }
}