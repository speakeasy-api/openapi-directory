package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceParametersAddOnParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public ConferenceParametersAddOnParameters withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
}