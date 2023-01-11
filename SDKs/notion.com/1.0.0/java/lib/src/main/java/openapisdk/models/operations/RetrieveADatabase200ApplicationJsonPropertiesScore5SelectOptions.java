package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions withName(String name) {
        this.name = name;
        return this;
    }
}