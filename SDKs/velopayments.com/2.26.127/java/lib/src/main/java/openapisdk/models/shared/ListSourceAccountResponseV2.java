package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSourceAccountResponseV2
 * List Source Accounts Response Object
**/
public class ListSourceAccountResponseV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public SourceAccountResponseV2[] content;
    public ListSourceAccountResponseV2 withContent(SourceAccountResponseV2[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public ListSourceAccountResponseV2 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public ListSourceAccountResponseV2 withPage(Object page) {
        this.page = page;
        return this;
    }
}