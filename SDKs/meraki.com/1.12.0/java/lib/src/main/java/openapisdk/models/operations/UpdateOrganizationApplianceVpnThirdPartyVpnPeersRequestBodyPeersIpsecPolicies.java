package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
**/
public class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childAuthAlgo")
    public String[] childAuthAlgo;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withChildAuthAlgo(String[] childAuthAlgo) {
        this.childAuthAlgo = childAuthAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childCipherAlgo")
    public String[] childCipherAlgo;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withChildCipherAlgo(String[] childCipherAlgo) {
        this.childCipherAlgo = childCipherAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childLifetime")
    public Long childLifetime;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withChildLifetime(Long childLifetime) {
        this.childLifetime = childLifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childPfsGroup")
    public String[] childPfsGroup;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withChildPfsGroup(String[] childPfsGroup) {
        this.childPfsGroup = childPfsGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ikeAuthAlgo")
    public String[] ikeAuthAlgo;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withIkeAuthAlgo(String[] ikeAuthAlgo) {
        this.ikeAuthAlgo = ikeAuthAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ikeCipherAlgo")
    public String[] ikeCipherAlgo;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withIkeCipherAlgo(String[] ikeCipherAlgo) {
        this.ikeCipherAlgo = ikeCipherAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ikeDiffieHellmanGroup")
    public String[] ikeDiffieHellmanGroup;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withIkeDiffieHellmanGroup(String[] ikeDiffieHellmanGroup) {
        this.ikeDiffieHellmanGroup = ikeDiffieHellmanGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ikeLifetime")
    public Long ikeLifetime;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withIkeLifetime(Long ikeLifetime) {
        this.ikeLifetime = ikeLifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ikePrfAlgo")
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[] ikePrfAlgo;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies withIkePrfAlgo(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[] ikePrfAlgo) {
        this.ikePrfAlgo = ikePrfAlgo;
        return this;
    }
}