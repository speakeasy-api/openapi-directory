package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildrenRequestBodyChildrenHeading2TextText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public AppendBlockChildrenRequestBodyChildrenHeading2TextText withContent(String content) {
        this.content = content;
        return this;
    }
}