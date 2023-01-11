package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildrenRequestBodyChildren {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading_2")
    public AppendBlockChildrenRequestBodyChildrenHeading2 heading2;
    public AppendBlockChildrenRequestBodyChildren withHeading2(AppendBlockChildrenRequestBodyChildrenHeading2 heading2) {
        this.heading2 = heading2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public AppendBlockChildrenRequestBodyChildren withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AppendBlockChildrenRequestBodyChildren withType(String type) {
        this.type = type;
        return this;
    }
}