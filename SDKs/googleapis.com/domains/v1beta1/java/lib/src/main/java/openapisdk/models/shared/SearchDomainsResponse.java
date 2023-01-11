package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchDomainsResponse
 * Response for the `SearchDomains` method.
**/
public class SearchDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registerParameters")
    public RegisterParameters[] registerParameters;
    public SearchDomainsResponse withRegisterParameters(RegisterParameters[] registerParameters) {
        this.registerParameters = registerParameters;
        return this;
    }
}