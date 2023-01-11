package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect withName(String name) {
        this.name = name;
        return this;
    }
}