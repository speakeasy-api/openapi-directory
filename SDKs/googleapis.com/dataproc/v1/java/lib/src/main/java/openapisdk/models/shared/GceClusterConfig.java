package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GceClusterConfig
 * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
**/
public class GceClusterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidentialInstanceConfig")
    public ConfidentialInstanceConfig confidentialInstanceConfig;
    public GceClusterConfig withConfidentialInstanceConfig(ConfidentialInstanceConfig confidentialInstanceConfig) {
        this.confidentialInstanceConfig = confidentialInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIpOnly")
    public Boolean internalIpOnly;
    public GceClusterConfig withInternalIpOnly(Boolean internalIpOnly) {
        this.internalIpOnly = internalIpOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public GceClusterConfig withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public GceClusterConfig withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeGroupAffinity")
    public NodeGroupAffinity nodeGroupAffinity;
    public GceClusterConfig withNodeGroupAffinity(NodeGroupAffinity nodeGroupAffinity) {
        this.nodeGroupAffinity = nodeGroupAffinity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIpv6GoogleAccess")
    public GceClusterConfigPrivateIpv6GoogleAccessEnum privateIpv6GoogleAccess;
    public GceClusterConfig withPrivateIpv6GoogleAccess(GceClusterConfigPrivateIpv6GoogleAccessEnum privateIpv6GoogleAccess) {
        this.privateIpv6GoogleAccess = privateIpv6GoogleAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationAffinity")
    public ReservationAffinity reservationAffinity;
    public GceClusterConfig withReservationAffinity(ReservationAffinity reservationAffinity) {
        this.reservationAffinity = reservationAffinity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GceClusterConfig withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountScopes")
    public String[] serviceAccountScopes;
    public GceClusterConfig withServiceAccountScopes(String[] serviceAccountScopes) {
        this.serviceAccountScopes = serviceAccountScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public ShieldedInstanceConfig shieldedInstanceConfig;
    public GceClusterConfig withShieldedInstanceConfig(ShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetworkUri")
    public String subnetworkUri;
    public GceClusterConfig withSubnetworkUri(String subnetworkUri) {
        this.subnetworkUri = subnetworkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public GceClusterConfig withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoneUri")
    public String zoneUri;
    public GceClusterConfig withZoneUri(String zoneUri) {
        this.zoneUri = zoneUri;
        return this;
    }
}