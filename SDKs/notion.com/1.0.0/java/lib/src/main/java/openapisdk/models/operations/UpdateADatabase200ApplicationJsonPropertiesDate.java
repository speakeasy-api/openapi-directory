package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public java.util.Map<String, Object> date;
    public UpdateADatabase200ApplicationJsonPropertiesDate withDate(java.util.Map<String, Object> date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateADatabase200ApplicationJsonPropertiesDate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateADatabase200ApplicationJsonPropertiesDate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateADatabase200ApplicationJsonPropertiesDate withType(String type) {
        this.type = type;
        return this;
    }
}