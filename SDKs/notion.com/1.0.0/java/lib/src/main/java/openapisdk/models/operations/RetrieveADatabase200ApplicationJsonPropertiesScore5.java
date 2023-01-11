package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesScore5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveADatabase200ApplicationJsonPropertiesScore5Select select;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5 withSelect(RetrieveADatabase200ApplicationJsonPropertiesScore5Select select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesScore5 withType(String type) {
        this.type = type;
        return this;
    }
}