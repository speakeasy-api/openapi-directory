package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveBlockChildren200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_more")
    public Boolean hasMore;
    public RetrieveBlockChildren200ApplicationJson withHasMore(Boolean hasMore) {
        this.hasMore = hasMore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_cursor")
    public Object nextCursor;
    public RetrieveBlockChildren200ApplicationJson withNextCursor(Object nextCursor) {
        this.nextCursor = nextCursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public RetrieveBlockChildren200ApplicationJson withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public RetrieveBlockChildren200ApplicationJsonResults[] results;
    public RetrieveBlockChildren200ApplicationJson withResults(RetrieveBlockChildren200ApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
}