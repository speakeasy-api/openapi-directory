package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetYearMonthJson200ApplicationJsonResponseMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hits")
    public Long hits;
    public GetYearMonthJson200ApplicationJsonResponseMeta withHits(Long hits) {
        this.hits = hits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public GetYearMonthJson200ApplicationJsonResponseMeta withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public GetYearMonthJson200ApplicationJsonResponseMeta withTime(Long time) {
        this.time = time;
        return this;
    }
}