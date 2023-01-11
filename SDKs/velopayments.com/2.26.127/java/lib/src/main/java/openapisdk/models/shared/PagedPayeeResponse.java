package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedPayeeResponse
 * List Payees Response Object
**/
public class PagedPayeeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public GetPayeeListResponse[] content;
    public PagedPayeeResponse withContent(GetPayeeListResponse[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PagedPayeeResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PagedPayeeResponse withPage(Object page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public Object summary;
    public PagedPayeeResponse withSummary(Object summary) {
        this.summary = summary;
        return this;
    }
}