package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarriersResponseBodyCarrierCarrierAdvancedOption
 * Advanced options that are specific to the carrier
**/
public class GetCarriersResponseBodyCarrierCarrierAdvancedOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_value")
    public String defaultValue;
    public GetCarriersResponseBodyCarrierCarrierAdvancedOption withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetCarriersResponseBodyCarrierCarrierAdvancedOption withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetCarriersResponseBodyCarrierCarrierAdvancedOption withName(String name) {
        this.name = name;
        return this;
    }
}