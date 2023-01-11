package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateClusterConfig
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
**/
public class PrivateClusterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivateEndpoint")
    public Boolean enablePrivateEndpoint;
    public PrivateClusterConfig withEnablePrivateEndpoint(Boolean enablePrivateEndpoint) {
        this.enablePrivateEndpoint = enablePrivateEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterIpv4CidrBlock")
    public String masterIpv4CidrBlock;
    public PrivateClusterConfig withMasterIpv4CidrBlock(String masterIpv4CidrBlock) {
        this.masterIpv4CidrBlock = masterIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterIpv4ReservedRange")
    public String masterIpv4ReservedRange;
    public PrivateClusterConfig withMasterIpv4ReservedRange(String masterIpv4ReservedRange) {
        this.masterIpv4ReservedRange = masterIpv4ReservedRange;
        return this;
    }
}