package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateServiceIdentityResponse
 * Response for GenerateServiceIdentity.
**/
public class GenerateServiceIdentityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public ServiceIdentity identity;
    public GenerateServiceIdentityResponse withIdentity(ServiceIdentity identity) {
        this.identity = identity;
        return this;
    }
}