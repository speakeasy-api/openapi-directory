package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesSummaryTextText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryTextText withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Object link;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryTextText withLink(Object link) {
        this.link = link;
        return this;
    }
}