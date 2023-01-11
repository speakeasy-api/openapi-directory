package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectInsurerRequestBody
 * A create shipsurance connection request body
**/
public class ConnectInsurerRequestBody {
    @JsonProperty("email")
    public String email;
    public ConnectInsurerRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("policy_id")
    public String policyId;
    public ConnectInsurerRequestBody withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}