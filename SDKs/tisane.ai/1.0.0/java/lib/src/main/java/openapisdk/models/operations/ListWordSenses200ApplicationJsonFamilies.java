package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWordSenses200ApplicationJsonFamilies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public Double key;
    public ListWordSenses200ApplicationJsonFamilies withKey(Double key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public java.util.Map<String, Object> value;
    public ListWordSenses200ApplicationJsonFamilies withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public String definition;
    public ListWordSenses200ApplicationJsonFamilies withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
}