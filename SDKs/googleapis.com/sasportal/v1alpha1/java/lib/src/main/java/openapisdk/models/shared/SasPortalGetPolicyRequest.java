package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalGetPolicyRequest
 * Request message for `GetPolicy` method.
**/
public class SasPortalGetPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public SasPortalGetPolicyRequest withResource(String resource) {
        this.resource = resource;
        return this;
    }
}