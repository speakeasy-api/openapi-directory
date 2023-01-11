package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedZone
 * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
**/
public class ManagedZone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudLoggingConfig")
    public ManagedZoneCloudLoggingConfig cloudLoggingConfig;
    public ManagedZone withCloudLoggingConfig(ManagedZoneCloudLoggingConfig cloudLoggingConfig) {
        this.cloudLoggingConfig = cloudLoggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public ManagedZone withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ManagedZone withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsName")
    public String dnsName;
    public ManagedZone withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnssecConfig")
    public ManagedZoneDnsSecConfig dnssecConfig;
    public ManagedZone withDnssecConfig(ManagedZoneDnsSecConfig dnssecConfig) {
        this.dnssecConfig = dnssecConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardingConfig")
    public ManagedZoneForwardingConfig forwardingConfig;
    public ManagedZone withForwardingConfig(ManagedZoneForwardingConfig forwardingConfig) {
        this.forwardingConfig = forwardingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ManagedZone withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZone withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ManagedZone withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ManagedZone withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameServerSet")
    public String nameServerSet;
    public ManagedZone withNameServerSet(String nameServerSet) {
        this.nameServerSet = nameServerSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameServers")
    public String[] nameServers;
    public ManagedZone withNameServers(String[] nameServers) {
        this.nameServers = nameServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peeringConfig")
    public ManagedZonePeeringConfig peeringConfig;
    public ManagedZone withPeeringConfig(ManagedZonePeeringConfig peeringConfig) {
        this.peeringConfig = peeringConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateVisibilityConfig")
    public ManagedZonePrivateVisibilityConfig privateVisibilityConfig;
    public ManagedZone withPrivateVisibilityConfig(ManagedZonePrivateVisibilityConfig privateVisibilityConfig) {
        this.privateVisibilityConfig = privateVisibilityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseLookupConfig")
    public ManagedZoneReverseLookupConfig reverseLookupConfig;
    public ManagedZone withReverseLookupConfig(ManagedZoneReverseLookupConfig reverseLookupConfig) {
        this.reverseLookupConfig = reverseLookupConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDirectoryConfig")
    public ManagedZoneServiceDirectoryConfig serviceDirectoryConfig;
    public ManagedZone withServiceDirectoryConfig(ManagedZoneServiceDirectoryConfig serviceDirectoryConfig) {
        this.serviceDirectoryConfig = serviceDirectoryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public ManagedZoneVisibilityEnum visibility;
    public ManagedZone withVisibility(ManagedZoneVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}