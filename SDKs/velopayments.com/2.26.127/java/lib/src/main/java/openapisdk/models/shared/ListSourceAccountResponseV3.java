package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSourceAccountResponseV3
 * List Source Accounts Response Object
**/
public class ListSourceAccountResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public SourceAccountResponseV3[] content;
    public ListSourceAccountResponseV3 withContent(SourceAccountResponseV3[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListSourceAccountResponseV3 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListSourceAccountResponseV3 withPage(Object page) {
        this.page = page;
        return this;
    }
}