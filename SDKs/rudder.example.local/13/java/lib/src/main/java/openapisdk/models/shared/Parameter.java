package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Parameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Parameter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Parameter withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overridable")
    public Boolean overridable;
    public Parameter withOverridable(Boolean overridable) {
        this.overridable = overridable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public Parameter withValue(Object value) {
        this.value = value;
        return this;
    }
}