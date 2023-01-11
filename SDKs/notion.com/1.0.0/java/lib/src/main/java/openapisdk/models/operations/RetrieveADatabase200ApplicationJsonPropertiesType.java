package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveADatabase200ApplicationJsonPropertiesTypeSelect select;
    public RetrieveADatabase200ApplicationJsonPropertiesType withSelect(RetrieveADatabase200ApplicationJsonPropertiesTypeSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesType withType(String type) {
        this.type = type;
        return this;
    }
}