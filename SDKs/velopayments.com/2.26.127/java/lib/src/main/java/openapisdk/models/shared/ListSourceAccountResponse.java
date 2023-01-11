package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSourceAccountResponse
 * List Source Accounts Response Object
**/
public class ListSourceAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public SourceAccountResponse[] content;
    public ListSourceAccountResponse withContent(SourceAccountResponse[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListSourceAccountResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListSourceAccountResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}