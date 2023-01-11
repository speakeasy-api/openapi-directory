package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Applications {
    @JsonProperty("_embedded")
    public Embedded embedded;
    public Applications withEmbedded(Embedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonProperty("_links")
    public Links links;
    public Applications withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public Applications withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("page_index")
    public Long pageIndex;
    public Applications withPageIndex(Long pageIndex) {
        this.pageIndex = pageIndex;
        return this;
    }
    @JsonProperty("page_size")
    public Long pageSize;
    public Applications withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}