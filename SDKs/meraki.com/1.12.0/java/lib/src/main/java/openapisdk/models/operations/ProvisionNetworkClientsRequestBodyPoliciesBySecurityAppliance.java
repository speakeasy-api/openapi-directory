package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance
 * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
**/
public class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePolicy")
    public ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum devicePolicy;
    public ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance withDevicePolicy(ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
}