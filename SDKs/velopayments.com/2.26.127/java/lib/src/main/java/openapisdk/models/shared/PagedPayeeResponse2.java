package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedPayeeResponse2
 * List Payees Response Object
**/
public class PagedPayeeResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public GetPayeeListResponse2[] content;
    public PagedPayeeResponse2 withContent(GetPayeeListResponse2[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PagedPayeeResponse2 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PagedPayeeResponse2 withPage(Object page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public Object summary;
    public PagedPayeeResponse2 withSummary(Object summary) {
        this.summary = summary;
        return this;
    }
}