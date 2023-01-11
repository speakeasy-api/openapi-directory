package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppliedInventoriesParametersServicePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_parameters")
    public java.util.Map<String, Object> serviceParameters;
    public AppliedInventoriesParametersServicePlan withServiceParameters(java.util.Map<String, Object> serviceParameters) {
        this.serviceParameters = serviceParameters;
        return this;
    }
}