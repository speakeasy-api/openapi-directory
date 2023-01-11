package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonParent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_id")
    public String pageId;
    public UpdateADatabase200ApplicationJsonParent withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateADatabase200ApplicationJsonParent withType(String type) {
        this.type = type;
        return this;
    }
}