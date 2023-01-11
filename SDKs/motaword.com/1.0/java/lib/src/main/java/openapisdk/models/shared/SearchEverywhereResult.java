package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchEverywhereResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public SearchEverywhereResult withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public SearchEverywhereResultResult result;
    public SearchEverywhereResult withResult(SearchEverywhereResultResult result) {
        this.result = result;
        return this;
    }
}