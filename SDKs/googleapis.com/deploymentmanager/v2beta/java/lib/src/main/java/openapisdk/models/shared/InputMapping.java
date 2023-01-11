package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputMapping
 * InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
**/
public class InputMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldName")
    public String fieldName;
    public InputMapping withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public InputMappingLocationEnum location;
    public InputMapping withLocation(InputMappingLocationEnum location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodMatch")
    public String methodMatch;
    public InputMapping withMethodMatch(String methodMatch) {
        this.methodMatch = methodMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public InputMapping withValue(String value) {
        this.value = value;
        return this;
    }
}