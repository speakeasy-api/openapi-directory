package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateEnvironmentConfig
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
public class PrivateEnvironmentConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudComposerConnectionSubnetwork")
    public String cloudComposerConnectionSubnetwork;
    public PrivateEnvironmentConfig withCloudComposerConnectionSubnetwork(String cloudComposerConnectionSubnetwork) {
        this.cloudComposerConnectionSubnetwork = cloudComposerConnectionSubnetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudComposerNetworkIpv4CidrBlock")
    public String cloudComposerNetworkIpv4CidrBlock;
    public PrivateEnvironmentConfig withCloudComposerNetworkIpv4CidrBlock(String cloudComposerNetworkIpv4CidrBlock) {
        this.cloudComposerNetworkIpv4CidrBlock = cloudComposerNetworkIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudComposerNetworkIpv4ReservedRange")
    public String cloudComposerNetworkIpv4ReservedRange;
    public PrivateEnvironmentConfig withCloudComposerNetworkIpv4ReservedRange(String cloudComposerNetworkIpv4ReservedRange) {
        this.cloudComposerNetworkIpv4ReservedRange = cloudComposerNetworkIpv4ReservedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlIpv4CidrBlock")
    public String cloudSqlIpv4CidrBlock;
    public PrivateEnvironmentConfig withCloudSqlIpv4CidrBlock(String cloudSqlIpv4CidrBlock) {
        this.cloudSqlIpv4CidrBlock = cloudSqlIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivateEnvironment")
    public Boolean enablePrivateEnvironment;
    public PrivateEnvironmentConfig withEnablePrivateEnvironment(Boolean enablePrivateEnvironment) {
        this.enablePrivateEnvironment = enablePrivateEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivatelyUsedPublicIps")
    public Boolean enablePrivatelyUsedPublicIps;
    public PrivateEnvironmentConfig withEnablePrivatelyUsedPublicIps(Boolean enablePrivatelyUsedPublicIps) {
        this.enablePrivatelyUsedPublicIps = enablePrivatelyUsedPublicIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkingConfig")
    public NetworkingConfig networkingConfig;
    public PrivateEnvironmentConfig withNetworkingConfig(NetworkingConfig networkingConfig) {
        this.networkingConfig = networkingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateClusterConfig")
    public PrivateClusterConfig privateClusterConfig;
    public PrivateEnvironmentConfig withPrivateClusterConfig(PrivateClusterConfig privateClusterConfig) {
        this.privateClusterConfig = privateClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webServerIpv4CidrBlock")
    public String webServerIpv4CidrBlock;
    public PrivateEnvironmentConfig withWebServerIpv4CidrBlock(String webServerIpv4CidrBlock) {
        this.webServerIpv4CidrBlock = webServerIpv4CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webServerIpv4ReservedRange")
    public String webServerIpv4ReservedRange;
    public PrivateEnvironmentConfig withWebServerIpv4ReservedRange(String webServerIpv4ReservedRange) {
        this.webServerIpv4ReservedRange = webServerIpv4ReservedRange;
        return this;
    }
}