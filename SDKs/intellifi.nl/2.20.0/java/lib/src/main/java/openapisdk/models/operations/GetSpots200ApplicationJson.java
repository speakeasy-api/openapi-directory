package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSpots200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetSpots200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_current")
    public Long countCurrent;
    public GetSpots200ApplicationJson withCountCurrent(Long countCurrent) {
        this.countCurrent = countCurrent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_limited")
    public Boolean isLimited;
    public GetSpots200ApplicationJson withIsLimited(Boolean isLimited) {
        this.isLimited = isLimited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_url")
    public String nextUrl;
    public GetSpots200ApplicationJson withNextUrl(String nextUrl) {
        this.nextUrl = nextUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_duration_ms")
    public Long queryDurationMs;
    public GetSpots200ApplicationJson withQueryDurationMs(Long queryDurationMs) {
        this.queryDurationMs = queryDurationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.SpotGet[] results;
    public GetSpots200ApplicationJson withResults(openapisdk.models.shared.SpotGet[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetSpots200ApplicationJson withUrl(String url) {
        this.url = url;
        return this;
    }
}