package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarrierOptionsResponseBodyCarrierAdvancedOption
 * Advanced options that are specific to the carrier
**/
public class GetCarrierOptionsResponseBodyCarrierAdvancedOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_value")
    public String defaultValue;
    public GetCarrierOptionsResponseBodyCarrierAdvancedOption withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetCarrierOptionsResponseBodyCarrierAdvancedOption withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetCarrierOptionsResponseBodyCarrierAdvancedOption withName(String name) {
        this.name = name;
        return this;
    }
}