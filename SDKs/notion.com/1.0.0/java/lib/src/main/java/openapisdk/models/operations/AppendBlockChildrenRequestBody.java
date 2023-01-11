package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildrenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("children")
    public AppendBlockChildrenRequestBodyChildren[] children;
    public AppendBlockChildrenRequestBody withChildren(AppendBlockChildrenRequestBodyChildren[] children) {
        this.children = children;
        return this;
    }
}