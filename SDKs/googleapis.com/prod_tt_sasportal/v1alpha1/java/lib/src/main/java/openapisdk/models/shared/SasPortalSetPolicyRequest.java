package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalSetPolicyRequest
 * Request message for `SetPolicy` method.
**/
public class SasPortalSetPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableNotification")
    public Boolean disableNotification;
    public SasPortalSetPolicyRequest withDisableNotification(Boolean disableNotification) {
        this.disableNotification = disableNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public SasPortalPolicy policy;
    public SasPortalSetPolicyRequest withPolicy(SasPortalPolicy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public SasPortalSetPolicyRequest withResource(String resource) {
        this.resource = resource;
        return this;
    }
}