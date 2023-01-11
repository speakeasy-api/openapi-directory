package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJsonPropertiesAuthor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_select")
    public RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect[] multiSelect;
    public RetrieveAPage200ApplicationJsonPropertiesAuthor withMultiSelect(RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect[] multiSelect) {
        this.multiSelect = multiSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesAuthor withType(String type) {
        this.type = type;
        return this;
    }
}