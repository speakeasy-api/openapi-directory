package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetArticlesearchJson200ApplicationJsonResponseMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hits")
    public Long hits;
    public GetArticlesearchJson200ApplicationJsonResponseMeta withHits(Long hits) {
        this.hits = hits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public GetArticlesearchJson200ApplicationJsonResponseMeta withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public GetArticlesearchJson200ApplicationJsonResponseMeta withTime(Long time) {
        this.time = time;
        return this;
    }
}