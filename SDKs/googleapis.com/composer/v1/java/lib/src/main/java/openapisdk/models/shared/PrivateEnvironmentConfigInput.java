package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateEnvironmentConfigInput
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
public class PrivateEnvironmentConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudComposerConnectionSubnetwork")
    public String cloudComposerConnectionSubnetwork;
    public PrivateEnvironmentConfigInput withCloudComposerConnectionSubnetwork(String cloudComposerConnectionSubnetwork) {
        this.cloudComposerConnectionSubnetwork = cloudComposerConnectionSubnetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudComposerNetworkIpv4CidrBlock")
    public String cloudComposerNetworkIpv4CidrBlock;
    public PrivateEnvironmentConfigInput withCloudComposerNetworkIpv4CidrBlock(String cloudComposerNetworkIpv4CidrBlock) {
        this.cloudComposerNetworkIpv4CidrBlock = cloudComposerNetworkIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlIpv4CidrBlock")
    public String cloudSqlIpv4CidrBlock;
    public PrivateEnvironmentConfigInput withCloudSqlIpv4CidrBlock(String cloudSqlIpv4CidrBlock) {
        this.cloudSqlIpv4CidrBlock = cloudSqlIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivateEnvironment")
    public Boolean enablePrivateEnvironment;
    public PrivateEnvironmentConfigInput withEnablePrivateEnvironment(Boolean enablePrivateEnvironment) {
        this.enablePrivateEnvironment = enablePrivateEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivatelyUsedPublicIps")
    public Boolean enablePrivatelyUsedPublicIps;
    public PrivateEnvironmentConfigInput withEnablePrivatelyUsedPublicIps(Boolean enablePrivatelyUsedPublicIps) {
        this.enablePrivatelyUsedPublicIps = enablePrivatelyUsedPublicIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkingConfig")
    public NetworkingConfig networkingConfig;
    public PrivateEnvironmentConfigInput withNetworkingConfig(NetworkingConfig networkingConfig) {
        this.networkingConfig = networkingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateClusterConfig")
    public PrivateClusterConfigInput privateClusterConfig;
    public PrivateEnvironmentConfigInput withPrivateClusterConfig(PrivateClusterConfigInput privateClusterConfig) {
        this.privateClusterConfig = privateClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webServerIpv4CidrBlock")
    public String webServerIpv4CidrBlock;
    public PrivateEnvironmentConfigInput withWebServerIpv4CidrBlock(String webServerIpv4CidrBlock) {
        this.webServerIpv4CidrBlock = webServerIpv4CidrBlock;
        return this;
    }
}