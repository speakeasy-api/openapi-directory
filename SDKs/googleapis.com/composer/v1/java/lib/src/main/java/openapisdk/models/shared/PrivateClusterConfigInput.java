package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateClusterConfigInput
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
**/
public class PrivateClusterConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivateEndpoint")
    public Boolean enablePrivateEndpoint;
    public PrivateClusterConfigInput withEnablePrivateEndpoint(Boolean enablePrivateEndpoint) {
        this.enablePrivateEndpoint = enablePrivateEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterIpv4CidrBlock")
    public String masterIpv4CidrBlock;
    public PrivateClusterConfigInput withMasterIpv4CidrBlock(String masterIpv4CidrBlock) {
        this.masterIpv4CidrBlock = masterIpv4CidrBlock;
        return this;
    }
}