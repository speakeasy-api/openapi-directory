package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdditionalItemProperty
 * An additional property for the item
**/
public class AdditionalItemProperty {
    @JsonProperty("name")
    public String name;
    public AdditionalItemProperty withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public AdditionalItemProperty withValue(String value) {
        this.value = value;
        return this;
    }
}