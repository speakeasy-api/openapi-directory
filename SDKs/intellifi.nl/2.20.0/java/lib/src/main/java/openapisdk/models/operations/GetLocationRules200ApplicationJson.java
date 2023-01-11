package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLocationRules200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetLocationRules200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_current")
    public Long countCurrent;
    public GetLocationRules200ApplicationJson withCountCurrent(Long countCurrent) {
        this.countCurrent = countCurrent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_limited")
    public Boolean isLimited;
    public GetLocationRules200ApplicationJson withIsLimited(Boolean isLimited) {
        this.isLimited = isLimited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_url")
    public String nextUrl;
    public GetLocationRules200ApplicationJson withNextUrl(String nextUrl) {
        this.nextUrl = nextUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_duration_ms")
    public Long queryDurationMs;
    public GetLocationRules200ApplicationJson withQueryDurationMs(Long queryDurationMs) {
        this.queryDurationMs = queryDurationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.LocationRule[] results;
    public GetLocationRules200ApplicationJson withResults(openapisdk.models.shared.LocationRule[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLocationRules200ApplicationJson withUrl(String url) {
        this.url = url;
        return this;
    }
}