package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetrieveRegisterParametersResponse
 * Response for the `RetrieveRegisterParameters` method.
**/
public class RetrieveRegisterParametersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registerParameters")
    public RegisterParameters registerParameters;
    public RetrieveRegisterParametersResponse withRegisterParameters(RegisterParameters registerParameters) {
        this.registerParameters = registerParameters;
        return this;
    }
}