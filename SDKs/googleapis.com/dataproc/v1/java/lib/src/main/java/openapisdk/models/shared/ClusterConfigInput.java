package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterConfigInput
 * The cluster config.
**/
public class ClusterConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoscalingConfig")
    public AutoscalingConfig autoscalingConfig;
    public ClusterConfigInput withAutoscalingConfig(AutoscalingConfig autoscalingConfig) {
        this.autoscalingConfig = autoscalingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configBucket")
    public String configBucket;
    public ClusterConfigInput withConfigBucket(String configBucket) {
        this.configBucket = configBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocMetricConfig")
    public DataprocMetricConfig dataprocMetricConfig;
    public ClusterConfigInput withDataprocMetricConfig(DataprocMetricConfig dataprocMetricConfig) {
        this.dataprocMetricConfig = dataprocMetricConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public ClusterConfigInput withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointConfig")
    public EndpointConfigInput endpointConfig;
    public ClusterConfigInput withEndpointConfig(EndpointConfigInput endpointConfig) {
        this.endpointConfig = endpointConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gceClusterConfig")
    public GceClusterConfig gceClusterConfig;
    public ClusterConfigInput withGceClusterConfig(GceClusterConfig gceClusterConfig) {
        this.gceClusterConfig = gceClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusterConfig")
    public GkeClusterConfig gkeClusterConfig;
    public ClusterConfigInput withGkeClusterConfig(GkeClusterConfig gkeClusterConfig) {
        this.gkeClusterConfig = gkeClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationActions")
    public NodeInitializationAction[] initializationActions;
    public ClusterConfigInput withInitializationActions(NodeInitializationAction[] initializationActions) {
        this.initializationActions = initializationActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleConfig")
    public LifecycleConfigInput lifecycleConfig;
    public ClusterConfigInput withLifecycleConfig(LifecycleConfigInput lifecycleConfig) {
        this.lifecycleConfig = lifecycleConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterConfig")
    public InstanceGroupConfigInput masterConfig;
    public ClusterConfigInput withMasterConfig(InstanceGroupConfigInput masterConfig) {
        this.masterConfig = masterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metastoreConfig")
    public MetastoreConfig metastoreConfig;
    public ClusterConfigInput withMetastoreConfig(MetastoreConfig metastoreConfig) {
        this.metastoreConfig = metastoreConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryWorkerConfig")
    public InstanceGroupConfigInput secondaryWorkerConfig;
    public ClusterConfigInput withSecondaryWorkerConfig(InstanceGroupConfigInput secondaryWorkerConfig) {
        this.secondaryWorkerConfig = secondaryWorkerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityConfig")
    public SecurityConfig securityConfig;
    public ClusterConfigInput withSecurityConfig(SecurityConfig securityConfig) {
        this.securityConfig = securityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareConfig")
    public SoftwareConfig softwareConfig;
    public ClusterConfigInput withSoftwareConfig(SoftwareConfig softwareConfig) {
        this.softwareConfig = softwareConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempBucket")
    public String tempBucket;
    public ClusterConfigInput withTempBucket(String tempBucket) {
        this.tempBucket = tempBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfig")
    public InstanceGroupConfigInput workerConfig;
    public ClusterConfigInput withWorkerConfig(InstanceGroupConfigInput workerConfig) {
        this.workerConfig = workerConfig;
        return this;
    }
}