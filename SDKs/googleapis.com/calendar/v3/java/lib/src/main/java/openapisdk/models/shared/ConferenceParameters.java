package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addOnParameters")
    public ConferenceParametersAddOnParameters addOnParameters;
    public ConferenceParameters withAddOnParameters(ConferenceParametersAddOnParameters addOnParameters) {
        this.addOnParameters = addOnParameters;
        return this;
    }
}