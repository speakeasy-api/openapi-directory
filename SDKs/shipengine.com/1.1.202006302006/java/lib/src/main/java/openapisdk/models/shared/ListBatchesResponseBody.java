package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListBatchesResponseBody
 * A list batch response body
**/
public class ListBatchesResponseBody {
    @JsonProperty("batches")
    public Batch[] batches;
    public ListBatchesResponseBody withBatches(Batch[] batches) {
        this.batches = batches;
        return this;
    }
    @JsonProperty("links")
    public ListBatchesResponseBodyPaginationLink links;
    public ListBatchesResponseBody withLinks(ListBatchesResponseBodyPaginationLink links) {
        this.links = links;
        return this;
    }
    @JsonProperty("page")
    public Integer page;
    public ListBatchesResponseBody withPage(Integer page) {
        this.page = page;
        return this;
    }
    @JsonProperty("pages")
    public Integer pages;
    public ListBatchesResponseBody withPages(Integer pages) {
        this.pages = pages;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public ListBatchesResponseBody withTotal(Long total) {
        this.total = total;
        return this;
    }
}