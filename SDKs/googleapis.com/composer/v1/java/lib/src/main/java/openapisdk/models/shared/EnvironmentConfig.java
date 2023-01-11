package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentConfig
 * Configuration information for an environment.
**/
public class EnvironmentConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airflowUri")
    public String airflowUri;
    public EnvironmentConfig withAirflowUri(String airflowUri) {
        this.airflowUri = airflowUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dagGcsPrefix")
    public String dagGcsPrefix;
    public EnvironmentConfig withDagGcsPrefix(String dagGcsPrefix) {
        this.dagGcsPrefix = dagGcsPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseConfig")
    public DatabaseConfig databaseConfig;
    public EnvironmentConfig withDatabaseConfig(DatabaseConfig databaseConfig) {
        this.databaseConfig = databaseConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfig")
    public EncryptionConfig encryptionConfig;
    public EnvironmentConfig withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentSize")
    public EnvironmentConfigEnvironmentSizeEnum environmentSize;
    public EnvironmentConfig withEnvironmentSize(EnvironmentConfigEnvironmentSizeEnum environmentSize) {
        this.environmentSize = environmentSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeCluster")
    public String gkeCluster;
    public EnvironmentConfig withGkeCluster(String gkeCluster) {
        this.gkeCluster = gkeCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceWindow")
    public MaintenanceWindow maintenanceWindow;
    public EnvironmentConfig withMaintenanceWindow(MaintenanceWindow maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterAuthorizedNetworksConfig")
    public MasterAuthorizedNetworksConfig masterAuthorizedNetworksConfig;
    public EnvironmentConfig withMasterAuthorizedNetworksConfig(MasterAuthorizedNetworksConfig masterAuthorizedNetworksConfig) {
        this.masterAuthorizedNetworksConfig = masterAuthorizedNetworksConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeConfig")
    public NodeConfig nodeConfig;
    public EnvironmentConfig withNodeConfig(NodeConfig nodeConfig) {
        this.nodeConfig = nodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeCount")
    public Integer nodeCount;
    public EnvironmentConfig withNodeCount(Integer nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateEnvironmentConfig")
    public PrivateEnvironmentConfig privateEnvironmentConfig;
    public EnvironmentConfig withPrivateEnvironmentConfig(PrivateEnvironmentConfig privateEnvironmentConfig) {
        this.privateEnvironmentConfig = privateEnvironmentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recoveryConfig")
    public RecoveryConfig recoveryConfig;
    public EnvironmentConfig withRecoveryConfig(RecoveryConfig recoveryConfig) {
        this.recoveryConfig = recoveryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareConfig")
    public SoftwareConfig softwareConfig;
    public EnvironmentConfig withSoftwareConfig(SoftwareConfig softwareConfig) {
        this.softwareConfig = softwareConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webServerConfig")
    public WebServerConfig webServerConfig;
    public EnvironmentConfig withWebServerConfig(WebServerConfig webServerConfig) {
        this.webServerConfig = webServerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webServerNetworkAccessControl")
    public WebServerNetworkAccessControl webServerNetworkAccessControl;
    public EnvironmentConfig withWebServerNetworkAccessControl(WebServerNetworkAccessControl webServerNetworkAccessControl) {
        this.webServerNetworkAccessControl = webServerNetworkAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadsConfig")
    public WorkloadsConfig workloadsConfig;
    public EnvironmentConfig withWorkloadsConfig(WorkloadsConfig workloadsConfig) {
        this.workloadsConfig = workloadsConfig;
        return this;
    }
}