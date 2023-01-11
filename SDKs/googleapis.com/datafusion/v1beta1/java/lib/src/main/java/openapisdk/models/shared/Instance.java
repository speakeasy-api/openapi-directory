package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * Represents a Data Fusion instance.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public Accelerator[] accelerators;
    public Instance withAccelerators(Accelerator[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiEndpoint")
    public String apiEndpoint;
    public Instance withApiEndpoint(String apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableVersion")
    public Version[] availableVersion;
    public Instance withAvailableVersion(Version[] availableVersion) {
        this.availableVersion = availableVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Instance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyConfig")
    public CryptoKeyConfig cryptoKeyConfig;
    public Instance withCryptoKeyConfig(CryptoKeyConfig cryptoKeyConfig) {
        this.cryptoKeyConfig = cryptoKeyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocServiceAccount")
    public String dataprocServiceAccount;
    public Instance withDataprocServiceAccount(String dataprocServiceAccount) {
        this.dataprocServiceAccount = dataprocServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Instance withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledReason")
    public InstanceDisabledReasonEnum[] disabledReason;
    public Instance withDisabledReason(InstanceDisabledReasonEnum[] disabledReason) {
        this.disabledReason = disabledReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Instance withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableRbac")
    public Boolean enableRbac;
    public Instance withEnableRbac(Boolean enableRbac) {
        this.enableRbac = enableRbac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableStackdriverLogging")
    public Boolean enableStackdriverLogging;
    public Instance withEnableStackdriverLogging(Boolean enableStackdriverLogging) {
        this.enableStackdriverLogging = enableStackdriverLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableStackdriverMonitoring")
    public Boolean enableStackdriverMonitoring;
    public Instance withEnableStackdriverMonitoring(Boolean enableStackdriverMonitoring) {
        this.enableStackdriverMonitoring = enableStackdriverMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventPublishConfig")
    public EventPublishConfig eventPublishConfig;
    public Instance withEventPublishConfig(EventPublishConfig eventPublishConfig) {
        this.eventPublishConfig = eventPublishConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsBucket")
    public String gcsBucket;
    public Instance withGcsBucket(String gcsBucket) {
        this.gcsBucket = gcsBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Instance withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public Instance withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public java.util.Map<String, String> options;
    public Instance withOptions(java.util.Map<String, String> options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p4ServiceAccount")
    public String p4ServiceAccount;
    public Instance withP4ServiceAccount(String p4ServiceAccount) {
        this.p4ServiceAccount = p4ServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateInstance")
    public Boolean privateInstance;
    public Instance withPrivateInstance(Boolean privateInstance) {
        this.privateInstance = privateInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public Instance withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEndpoint")
    public String serviceEndpoint;
    public Instance withServiceEndpoint(String serviceEndpoint) {
        this.serviceEndpoint = serviceEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceStateEnum state;
    public Instance withState(InstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessage")
    public String stateMessage;
    public Instance withStateMessage(String stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantProjectId")
    public String tenantProjectId;
    public Instance withTenantProjectId(String tenantProjectId) {
        this.tenantProjectId = tenantProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InstanceTypeEnum type;
    public Instance withType(InstanceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Instance withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Instance withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public Instance withZone(String zone) {
        this.zone = zone;
        return this;
    }
}