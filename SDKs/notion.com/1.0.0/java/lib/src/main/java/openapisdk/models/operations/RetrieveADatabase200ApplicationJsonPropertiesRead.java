package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonPropertiesRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkbox")
    public java.util.Map<String, Object> checkbox;
    public RetrieveADatabase200ApplicationJsonPropertiesRead withCheckbox(java.util.Map<String, Object> checkbox) {
        this.checkbox = checkbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RetrieveADatabase200ApplicationJsonPropertiesRead withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonPropertiesRead withType(String type) {
        this.type = type;
        return this;
    }
}