package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAndSearchMediaItems200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public ListAndSearchMediaItems200ApplicationJsonEmbedded embedded;
    public ListAndSearchMediaItems200ApplicationJson withEmbedded(ListAndSearchMediaItems200ApplicationJsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ListAndSearchMediaItems200ApplicationJsonLinks links;
    public ListAndSearchMediaItems200ApplicationJson withLinks(ListAndSearchMediaItems200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public ListAndSearchMediaItems200ApplicationJson withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_index")
    public Long pageIndex;
    public ListAndSearchMediaItems200ApplicationJson withPageIndex(Long pageIndex) {
        this.pageIndex = pageIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListAndSearchMediaItems200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}