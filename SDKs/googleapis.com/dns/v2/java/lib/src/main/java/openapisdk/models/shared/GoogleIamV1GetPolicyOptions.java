package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIamV1GetPolicyOptions
 * Encapsulates settings provided to GetIamPolicy.
**/
public class GoogleIamV1GetPolicyOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedPolicyVersion")
    public Integer requestedPolicyVersion;
    public GoogleIamV1GetPolicyOptions withRequestedPolicyVersion(Integer requestedPolicyVersion) {
        this.requestedPolicyVersion = requestedPolicyVersion;
        return this;
    }
}