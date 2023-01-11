package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceInput
 * A managed metastore service that serves metadata queries.
**/
public class ServiceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseType")
    public ServiceDatabaseTypeEnum databaseType;
    public ServiceInput withDatabaseType(ServiceDatabaseTypeEnum databaseType) {
        this.databaseType = databaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public ServiceInput withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiveMetastoreConfig")
    public HiveMetastoreConfigInput hiveMetastoreConfig;
    public ServiceInput withHiveMetastoreConfig(HiveMetastoreConfigInput hiveMetastoreConfig) {
        this.hiveMetastoreConfig = hiveMetastoreConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ServiceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceWindow")
    public MaintenanceWindow maintenanceWindow;
    public ServiceInput withMaintenanceWindow(MaintenanceWindow maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataIntegration")
    public MetadataIntegration metadataIntegration;
    public ServiceInput withMetadataIntegration(MetadataIntegration metadataIntegration) {
        this.metadataIntegration = metadataIntegration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public ServiceInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfigInput networkConfig;
    public ServiceInput withNetworkConfig(NetworkConfigInput networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public ServiceInput withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseChannel")
    public ServiceReleaseChannelEnum releaseChannel;
    public ServiceInput withReleaseChannel(ServiceReleaseChannelEnum releaseChannel) {
        this.releaseChannel = releaseChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telemetryConfig")
    public TelemetryConfig telemetryConfig;
    public ServiceInput withTelemetryConfig(TelemetryConfig telemetryConfig) {
        this.telemetryConfig = telemetryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public ServiceTierEnum tier;
    public ServiceInput withTier(ServiceTierEnum tier) {
        this.tier = tier;
        return this;
    }
}