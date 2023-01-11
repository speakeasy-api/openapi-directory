package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchVerificationOptionsResponse
 * Response message for Verifications.FetchVerificationOptions.
**/
public class FetchVerificationOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public VerificationOption[] options;
    public FetchVerificationOptionsResponse withOptions(VerificationOption[] options) {
        this.options = options;
        return this;
    }
}