package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect withName(String name) {
        this.name = name;
        return this;
    }
}