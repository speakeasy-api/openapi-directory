package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpAllocationPolicy
 * Configuration for controlling how IPs are allocated in the GKE cluster running the Apache Airflow software.
**/
public class IpAllocationPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterIpv4CidrBlock")
    public String clusterIpv4CidrBlock;
    public IpAllocationPolicy withClusterIpv4CidrBlock(String clusterIpv4CidrBlock) {
        this.clusterIpv4CidrBlock = clusterIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterSecondaryRangeName")
    public String clusterSecondaryRangeName;
    public IpAllocationPolicy withClusterSecondaryRangeName(String clusterSecondaryRangeName) {
        this.clusterSecondaryRangeName = clusterSecondaryRangeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicesIpv4CidrBlock")
    public String servicesIpv4CidrBlock;
    public IpAllocationPolicy withServicesIpv4CidrBlock(String servicesIpv4CidrBlock) {
        this.servicesIpv4CidrBlock = servicesIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicesSecondaryRangeName")
    public String servicesSecondaryRangeName;
    public IpAllocationPolicy withServicesSecondaryRangeName(String servicesSecondaryRangeName) {
        this.servicesSecondaryRangeName = servicesSecondaryRangeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useIpAliases")
    public Boolean useIpAliases;
    public IpAllocationPolicy withUseIpAliases(Boolean useIpAliases) {
        this.useIpAliases = useIpAliases;
        return this;
    }
}