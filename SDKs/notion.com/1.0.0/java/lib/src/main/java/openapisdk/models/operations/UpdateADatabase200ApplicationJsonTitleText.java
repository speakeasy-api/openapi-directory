package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonTitleText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public UpdateADatabase200ApplicationJsonTitleText withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Object link;
    public UpdateADatabase200ApplicationJsonTitleText withLink(Object link) {
        this.link = link;
        return this;
    }
}