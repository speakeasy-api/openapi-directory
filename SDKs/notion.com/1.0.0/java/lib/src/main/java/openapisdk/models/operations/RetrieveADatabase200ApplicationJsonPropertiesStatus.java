package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesStatus withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public RetrieveADatabase200ApplicationJsonPropertiesStatusSelect select;
    public RetrieveADatabase200ApplicationJsonPropertiesStatus withSelect(RetrieveADatabase200ApplicationJsonPropertiesStatusSelect select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesStatus withType(String type) {
        this.type = type;
        return this;
    }
}