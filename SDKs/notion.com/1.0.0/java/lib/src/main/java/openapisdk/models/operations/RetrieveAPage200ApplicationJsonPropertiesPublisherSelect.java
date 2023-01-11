package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesPublisherSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public RetrieveAPage200ApplicationJsonPropertiesPublisherSelect withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveAPage200ApplicationJsonPropertiesPublisherSelect withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RetrieveAPage200ApplicationJsonPropertiesPublisherSelect withName(String name) {
        this.name = name;
        return this;
    }
}