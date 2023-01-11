package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateParametersRequestInput
 * Request for UpdateParameters.
**/
public class UpdateParametersRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public MemcacheParametersInput parameters;
    public UpdateParametersRequestInput withParameters(MemcacheParametersInput parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateParametersRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}