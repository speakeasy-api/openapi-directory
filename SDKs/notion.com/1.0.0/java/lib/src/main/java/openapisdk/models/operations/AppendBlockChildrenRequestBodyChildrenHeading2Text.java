package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildrenRequestBodyChildrenHeading2Text {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public AppendBlockChildrenRequestBodyChildrenHeading2TextText text;
    public AppendBlockChildrenRequestBodyChildrenHeading2Text withText(AppendBlockChildrenRequestBodyChildrenHeading2TextText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AppendBlockChildrenRequestBodyChildrenHeading2Text withType(String type) {
        this.type = type;
        return this;
    }
}