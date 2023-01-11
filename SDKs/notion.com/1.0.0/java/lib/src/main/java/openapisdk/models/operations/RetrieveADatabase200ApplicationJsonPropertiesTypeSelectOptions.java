package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions withName(String name) {
        this.name = name;
        return this;
    }
}