package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicy
 * Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
**/
public class IamPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyBlob")
    public String policyBlob;
    public IamPolicy withPolicyBlob(String policyBlob) {
        this.policyBlob = policyBlob;
        return this;
    }
}