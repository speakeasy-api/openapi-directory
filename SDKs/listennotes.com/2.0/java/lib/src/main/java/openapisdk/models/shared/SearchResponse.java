package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public SearchResponse withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_offset")
    public Long nextOffset;
    public SearchResponse withNextOffset(Long nextOffset) {
        this.nextOffset = nextOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Object[] results;
    public SearchResponse withResults(Object[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("took")
    public Double took;
    public SearchResponse withTook(Double took) {
        this.took = took;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public SearchResponse withTotal(Long total) {
        this.total = total;
        return this;
    }
}