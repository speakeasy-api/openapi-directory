package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_more")
    public Boolean hasMore;
    public QueryADatabase200ApplicationJson withHasMore(Boolean hasMore) {
        this.hasMore = hasMore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_cursor")
    public Object nextCursor;
    public QueryADatabase200ApplicationJson withNextCursor(Object nextCursor) {
        this.nextCursor = nextCursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public QueryADatabase200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public QueryADatabase200ApplicationJsonResults[] results;
    public QueryADatabase200ApplicationJson withResults(QueryADatabase200ApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
}