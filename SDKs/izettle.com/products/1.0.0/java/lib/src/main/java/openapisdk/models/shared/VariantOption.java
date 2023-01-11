package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VariantOption {
    @JsonProperty("name")
    public String name;
    public VariantOption withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public VariantOption withValue(String value) {
        this.value = value;
        return this;
    }
}