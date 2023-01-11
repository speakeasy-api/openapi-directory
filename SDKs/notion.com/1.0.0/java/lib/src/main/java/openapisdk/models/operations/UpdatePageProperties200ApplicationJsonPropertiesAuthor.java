package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesAuthor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_select")
    public UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect[] multiSelect;
    public UpdatePageProperties200ApplicationJsonPropertiesAuthor withMultiSelect(UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect[] multiSelect) {
        this.multiSelect = multiSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesAuthor withType(String type) {
        this.type = type;
        return this;
    }
}