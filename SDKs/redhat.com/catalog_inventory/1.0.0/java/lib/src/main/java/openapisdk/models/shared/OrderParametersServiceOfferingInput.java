package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderParametersServiceOfferingInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider_control_parameters")
    public java.util.Map<String, Object> providerControlParameters;
    public OrderParametersServiceOfferingInput withProviderControlParameters(java.util.Map<String, Object> providerControlParameters) {
        this.providerControlParameters = providerControlParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_parameters")
    public java.util.Map<String, Object> serviceParameters;
    public OrderParametersServiceOfferingInput withServiceParameters(java.util.Map<String, Object> serviceParameters) {
        this.serviceParameters = serviceParameters;
        return this;
    }
}