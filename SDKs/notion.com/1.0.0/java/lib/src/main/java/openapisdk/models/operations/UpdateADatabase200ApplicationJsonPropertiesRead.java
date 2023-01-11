package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkbox")
    public java.util.Map<String, Object> checkbox;
    public UpdateADatabase200ApplicationJsonPropertiesRead withCheckbox(java.util.Map<String, Object> checkbox) {
        this.checkbox = checkbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateADatabase200ApplicationJsonPropertiesRead withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateADatabase200ApplicationJsonPropertiesRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateADatabase200ApplicationJsonPropertiesRead withType(String type) {
        this.type = type;
        return this;
    }
}