package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInput
 * Represents a Data Fusion instance.
**/
public class InstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public Accelerator[] accelerators;
    public InstanceInput withAccelerators(Accelerator[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableVersion")
    public Version[] availableVersion;
    public InstanceInput withAvailableVersion(Version[] availableVersion) {
        this.availableVersion = availableVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyConfig")
    public CryptoKeyConfig cryptoKeyConfig;
    public InstanceInput withCryptoKeyConfig(CryptoKeyConfig cryptoKeyConfig) {
        this.cryptoKeyConfig = cryptoKeyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocServiceAccount")
    public String dataprocServiceAccount;
    public InstanceInput withDataprocServiceAccount(String dataprocServiceAccount) {
        this.dataprocServiceAccount = dataprocServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InstanceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InstanceInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableRbac")
    public Boolean enableRbac;
    public InstanceInput withEnableRbac(Boolean enableRbac) {
        this.enableRbac = enableRbac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableStackdriverLogging")
    public Boolean enableStackdriverLogging;
    public InstanceInput withEnableStackdriverLogging(Boolean enableStackdriverLogging) {
        this.enableStackdriverLogging = enableStackdriverLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableStackdriverMonitoring")
    public Boolean enableStackdriverMonitoring;
    public InstanceInput withEnableStackdriverMonitoring(Boolean enableStackdriverMonitoring) {
        this.enableStackdriverMonitoring = enableStackdriverMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventPublishConfig")
    public EventPublishConfig eventPublishConfig;
    public InstanceInput withEventPublishConfig(EventPublishConfig eventPublishConfig) {
        this.eventPublishConfig = eventPublishConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public InstanceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public InstanceInput withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public java.util.Map<String, String> options;
    public InstanceInput withOptions(java.util.Map<String, String> options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateInstance")
    public Boolean privateInstance;
    public InstanceInput withPrivateInstance(Boolean privateInstance) {
        this.privateInstance = privateInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InstanceTypeEnum type;
    public InstanceInput withType(InstanceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public InstanceInput withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public InstanceInput withZone(String zone) {
        this.zone = zone;
        return this;
    }
}