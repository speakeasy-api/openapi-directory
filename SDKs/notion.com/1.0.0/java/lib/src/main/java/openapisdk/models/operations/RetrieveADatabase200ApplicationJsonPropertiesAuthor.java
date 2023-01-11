package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesAuthor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_select")
    public RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect multiSelect;
    public RetrieveADatabase200ApplicationJsonPropertiesAuthor withMultiSelect(RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect multiSelect) {
        this.multiSelect = multiSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesAuthor withType(String type) {
        this.type = type;
        return this;
    }
}