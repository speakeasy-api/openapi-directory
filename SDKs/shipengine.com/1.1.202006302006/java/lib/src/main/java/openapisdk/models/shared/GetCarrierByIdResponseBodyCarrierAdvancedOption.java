package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarrierByIdResponseBodyCarrierAdvancedOption
 * Advanced options that are specific to the carrier
**/
public class GetCarrierByIdResponseBodyCarrierAdvancedOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_value")
    public String defaultValue;
    public GetCarrierByIdResponseBodyCarrierAdvancedOption withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetCarrierByIdResponseBodyCarrierAdvancedOption withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetCarrierByIdResponseBodyCarrierAdvancedOption withName(String name) {
        this.name = name;
        return this;
    }
}