package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ikeVersion")
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum ikeVersion;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withIkeVersion(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum ikeVersion) {
        this.ikeVersion = ikeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipsecPolicies")
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies ipsecPolicies;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withIpsecPolicies(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies ipsecPolicies) {
        this.ipsecPolicies = ipsecPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipsecPoliciesPreset")
    public String ipsecPoliciesPreset;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withIpsecPoliciesPreset(String ipsecPoliciesPreset) {
        this.ipsecPoliciesPreset = ipsecPoliciesPreset;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonProperty("privateSubnets")
    public String[] privateSubnets;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withPrivateSubnets(String[] privateSubnets) {
        this.privateSubnets = privateSubnets;
        return this;
    }
    @JsonProperty("publicIp")
    public String publicIp;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}