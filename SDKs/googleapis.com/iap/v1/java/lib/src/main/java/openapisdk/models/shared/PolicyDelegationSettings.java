package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyDelegationSettings
 * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
**/
public class PolicyDelegationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamPermission")
    public String iamPermission;
    public PolicyDelegationSettings withIamPermission(String iamPermission) {
        this.iamPermission = iamPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamServiceName")
    public String iamServiceName;
    public PolicyDelegationSettings withIamServiceName(String iamServiceName) {
        this.iamServiceName = iamServiceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyName")
    public PolicyName policyName;
    public PolicyDelegationSettings withPolicyName(PolicyName policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Resource resource;
    public PolicyDelegationSettings withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
}