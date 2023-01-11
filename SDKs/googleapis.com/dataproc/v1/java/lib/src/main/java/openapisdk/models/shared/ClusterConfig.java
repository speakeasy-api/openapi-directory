package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterConfig
 * The cluster config.
**/
public class ClusterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoscalingConfig")
    public AutoscalingConfig autoscalingConfig;
    public ClusterConfig withAutoscalingConfig(AutoscalingConfig autoscalingConfig) {
        this.autoscalingConfig = autoscalingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configBucket")
    public String configBucket;
    public ClusterConfig withConfigBucket(String configBucket) {
        this.configBucket = configBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocMetricConfig")
    public DataprocMetricConfig dataprocMetricConfig;
    public ClusterConfig withDataprocMetricConfig(DataprocMetricConfig dataprocMetricConfig) {
        this.dataprocMetricConfig = dataprocMetricConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public ClusterConfig withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointConfig")
    public EndpointConfig endpointConfig;
    public ClusterConfig withEndpointConfig(EndpointConfig endpointConfig) {
        this.endpointConfig = endpointConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gceClusterConfig")
    public GceClusterConfig gceClusterConfig;
    public ClusterConfig withGceClusterConfig(GceClusterConfig gceClusterConfig) {
        this.gceClusterConfig = gceClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusterConfig")
    public GkeClusterConfig gkeClusterConfig;
    public ClusterConfig withGkeClusterConfig(GkeClusterConfig gkeClusterConfig) {
        this.gkeClusterConfig = gkeClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationActions")
    public NodeInitializationAction[] initializationActions;
    public ClusterConfig withInitializationActions(NodeInitializationAction[] initializationActions) {
        this.initializationActions = initializationActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleConfig")
    public LifecycleConfig lifecycleConfig;
    public ClusterConfig withLifecycleConfig(LifecycleConfig lifecycleConfig) {
        this.lifecycleConfig = lifecycleConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterConfig")
    public InstanceGroupConfig masterConfig;
    public ClusterConfig withMasterConfig(InstanceGroupConfig masterConfig) {
        this.masterConfig = masterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metastoreConfig")
    public MetastoreConfig metastoreConfig;
    public ClusterConfig withMetastoreConfig(MetastoreConfig metastoreConfig) {
        this.metastoreConfig = metastoreConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryWorkerConfig")
    public InstanceGroupConfig secondaryWorkerConfig;
    public ClusterConfig withSecondaryWorkerConfig(InstanceGroupConfig secondaryWorkerConfig) {
        this.secondaryWorkerConfig = secondaryWorkerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityConfig")
    public SecurityConfig securityConfig;
    public ClusterConfig withSecurityConfig(SecurityConfig securityConfig) {
        this.securityConfig = securityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareConfig")
    public SoftwareConfig softwareConfig;
    public ClusterConfig withSoftwareConfig(SoftwareConfig softwareConfig) {
        this.softwareConfig = softwareConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempBucket")
    public String tempBucket;
    public ClusterConfig withTempBucket(String tempBucket) {
        this.tempBucket = tempBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfig")
    public InstanceGroupConfig workerConfig;
    public ClusterConfig withWorkerConfig(InstanceGroupConfig workerConfig) {
        this.workerConfig = workerConfig;
        return this;
    }
}