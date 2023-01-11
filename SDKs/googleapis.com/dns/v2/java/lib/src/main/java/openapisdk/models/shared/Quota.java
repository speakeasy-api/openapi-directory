package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Quota
 * Limits associated with a Project.
**/
public class Quota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsKeysPerManagedZone")
    public Integer dnsKeysPerManagedZone;
    public Quota withDnsKeysPerManagedZone(Integer dnsKeysPerManagedZone) {
        this.dnsKeysPerManagedZone = dnsKeysPerManagedZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClustersPerManagedZone")
    public Integer gkeClustersPerManagedZone;
    public Quota withGkeClustersPerManagedZone(Integer gkeClustersPerManagedZone) {
        this.gkeClustersPerManagedZone = gkeClustersPerManagedZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClustersPerPolicy")
    public Integer gkeClustersPerPolicy;
    public Quota withGkeClustersPerPolicy(Integer gkeClustersPerPolicy) {
        this.gkeClustersPerPolicy = gkeClustersPerPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClustersPerResponsePolicy")
    public Integer gkeClustersPerResponsePolicy;
    public Quota withGkeClustersPerResponsePolicy(Integer gkeClustersPerResponsePolicy) {
        this.gkeClustersPerResponsePolicy = gkeClustersPerResponsePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsPerRoutingPolicy")
    public Integer itemsPerRoutingPolicy;
    public Quota withItemsPerRoutingPolicy(Integer itemsPerRoutingPolicy) {
        this.itemsPerRoutingPolicy = itemsPerRoutingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Quota withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedZones")
    public Integer managedZones;
    public Quota withManagedZones(Integer managedZones) {
        this.managedZones = managedZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedZonesPerGkeCluster")
    public Integer managedZonesPerGkeCluster;
    public Quota withManagedZonesPerGkeCluster(Integer managedZonesPerGkeCluster) {
        this.managedZonesPerGkeCluster = managedZonesPerGkeCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedZonesPerNetwork")
    public Integer managedZonesPerNetwork;
    public Quota withManagedZonesPerNetwork(Integer managedZonesPerNetwork) {
        this.managedZonesPerNetwork = managedZonesPerNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networksPerManagedZone")
    public Integer networksPerManagedZone;
    public Quota withNetworksPerManagedZone(Integer networksPerManagedZone) {
        this.networksPerManagedZone = networksPerManagedZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networksPerPolicy")
    public Integer networksPerPolicy;
    public Quota withNetworksPerPolicy(Integer networksPerPolicy) {
        this.networksPerPolicy = networksPerPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networksPerResponsePolicy")
    public Integer networksPerResponsePolicy;
    public Quota withNetworksPerResponsePolicy(Integer networksPerResponsePolicy) {
        this.networksPerResponsePolicy = networksPerResponsePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peeringZonesPerTargetNetwork")
    public Integer peeringZonesPerTargetNetwork;
    public Quota withPeeringZonesPerTargetNetwork(Integer peeringZonesPerTargetNetwork) {
        this.peeringZonesPerTargetNetwork = peeringZonesPerTargetNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Integer policies;
    public Quota withPolicies(Integer policies) {
        this.policies = policies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRecordsPerRrset")
    public Integer resourceRecordsPerRrset;
    public Quota withResourceRecordsPerRrset(Integer resourceRecordsPerRrset) {
        this.resourceRecordsPerRrset = resourceRecordsPerRrset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicies")
    public Integer responsePolicies;
    public Quota withResponsePolicies(Integer responsePolicies) {
        this.responsePolicies = responsePolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyRulesPerResponsePolicy")
    public Integer responsePolicyRulesPerResponsePolicy;
    public Quota withResponsePolicyRulesPerResponsePolicy(Integer responsePolicyRulesPerResponsePolicy) {
        this.responsePolicyRulesPerResponsePolicy = responsePolicyRulesPerResponsePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrsetAdditionsPerChange")
    public Integer rrsetAdditionsPerChange;
    public Quota withRrsetAdditionsPerChange(Integer rrsetAdditionsPerChange) {
        this.rrsetAdditionsPerChange = rrsetAdditionsPerChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrsetDeletionsPerChange")
    public Integer rrsetDeletionsPerChange;
    public Quota withRrsetDeletionsPerChange(Integer rrsetDeletionsPerChange) {
        this.rrsetDeletionsPerChange = rrsetDeletionsPerChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrsetsPerManagedZone")
    public Integer rrsetsPerManagedZone;
    public Quota withRrsetsPerManagedZone(Integer rrsetsPerManagedZone) {
        this.rrsetsPerManagedZone = rrsetsPerManagedZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNameServersPerManagedZone")
    public Integer targetNameServersPerManagedZone;
    public Quota withTargetNameServersPerManagedZone(Integer targetNameServersPerManagedZone) {
        this.targetNameServersPerManagedZone = targetNameServersPerManagedZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNameServersPerPolicy")
    public Integer targetNameServersPerPolicy;
    public Quota withTargetNameServersPerPolicy(Integer targetNameServersPerPolicy) {
        this.targetNameServersPerPolicy = targetNameServersPerPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalRrdataSizePerChange")
    public Integer totalRrdataSizePerChange;
    public Quota withTotalRrdataSizePerChange(Integer totalRrdataSizePerChange) {
        this.totalRrdataSizePerChange = totalRrdataSizePerChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelistedKeySpecs")
    public DnsKeySpec[] whitelistedKeySpecs;
    public Quota withWhitelistedKeySpecs(DnsKeySpec[] whitelistedKeySpecs) {
        this.whitelistedKeySpecs = whitelistedKeySpecs;
        return this;
    }
}