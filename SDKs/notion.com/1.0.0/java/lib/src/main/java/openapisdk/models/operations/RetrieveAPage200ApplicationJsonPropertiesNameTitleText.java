package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesNameTitleText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleText withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Object link;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleText withLink(Object link) {
        this.link = link;
        return this;
    }
}