package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Service
 * A managed metastore service that serves metadata queries.
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactGcsUri")
    public String artifactGcsUri;
    public Service withArtifactGcsUri(String artifactGcsUri) {
        this.artifactGcsUri = artifactGcsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Service withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseType")
    public ServiceDatabaseTypeEnum databaseType;
    public Service withDatabaseType(ServiceDatabaseTypeEnum databaseType) {
        this.databaseType = databaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public Service withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUri")
    public String endpointUri;
    public Service withEndpointUri(String endpointUri) {
        this.endpointUri = endpointUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiveMetastoreConfig")
    public HiveMetastoreConfig hiveMetastoreConfig;
    public Service withHiveMetastoreConfig(HiveMetastoreConfig hiveMetastoreConfig) {
        this.hiveMetastoreConfig = hiveMetastoreConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Service withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceWindow")
    public MaintenanceWindow maintenanceWindow;
    public Service withMaintenanceWindow(MaintenanceWindow maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataIntegration")
    public MetadataIntegration metadataIntegration;
    public Service withMetadataIntegration(MetadataIntegration metadataIntegration) {
        this.metadataIntegration = metadataIntegration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataManagementActivity")
    public MetadataManagementActivity metadataManagementActivity;
    public Service withMetadataManagementActivity(MetadataManagementActivity metadataManagementActivity) {
        this.metadataManagementActivity = metadataManagementActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Service withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public Service withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public Service withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseChannel")
    public ServiceReleaseChannelEnum releaseChannel;
    public Service withReleaseChannel(ServiceReleaseChannelEnum releaseChannel) {
        this.releaseChannel = releaseChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ServiceStateEnum state;
    public Service withState(ServiceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public Service withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telemetryConfig")
    public TelemetryConfig telemetryConfig;
    public Service withTelemetryConfig(TelemetryConfig telemetryConfig) {
        this.telemetryConfig = telemetryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public ServiceTierEnum tier;
    public Service withTier(ServiceTierEnum tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Service withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Service withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}