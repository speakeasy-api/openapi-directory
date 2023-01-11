package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkbox")
    public Boolean checkbox;
    public UpdatePageProperties200ApplicationJsonPropertiesRead withCheckbox(Boolean checkbox) {
        this.checkbox = checkbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesRead withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesRead withType(String type) {
        this.type = type;
        return this;
    }
}