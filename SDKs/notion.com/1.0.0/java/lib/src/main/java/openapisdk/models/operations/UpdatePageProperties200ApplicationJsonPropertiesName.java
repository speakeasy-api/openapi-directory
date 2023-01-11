package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesName withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitle[] title;
    public UpdatePageProperties200ApplicationJsonPropertiesName withTitle(UpdatePageProperties200ApplicationJsonPropertiesNameTitle[] title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesName withType(String type) {
        this.type = type;
        return this;
    }
}