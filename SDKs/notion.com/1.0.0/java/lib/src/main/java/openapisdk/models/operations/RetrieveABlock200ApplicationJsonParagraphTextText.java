package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveABlock200ApplicationJsonParagraphTextText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public RetrieveABlock200ApplicationJsonParagraphTextText withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Object link;
    public RetrieveABlock200ApplicationJsonParagraphTextText withLink(Object link) {
        this.link = link;
        return this;
    }
}