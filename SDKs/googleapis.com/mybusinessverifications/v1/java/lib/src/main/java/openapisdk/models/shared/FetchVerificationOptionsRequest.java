package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchVerificationOptionsRequest
 * Request message for Verifications.FetchVerificationOptions.
**/
public class FetchVerificationOptionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ServiceBusinessContext context;
    public FetchVerificationOptionsRequest withContext(ServiceBusinessContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public FetchVerificationOptionsRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}