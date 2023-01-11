package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildrenRequestBodyChildrenHeading2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public AppendBlockChildrenRequestBodyChildrenHeading2Text[] text;
    public AppendBlockChildrenRequestBodyChildrenHeading2 withText(AppendBlockChildrenRequestBodyChildrenHeading2Text[] text) {
        this.text = text;
        return this;
    }
}