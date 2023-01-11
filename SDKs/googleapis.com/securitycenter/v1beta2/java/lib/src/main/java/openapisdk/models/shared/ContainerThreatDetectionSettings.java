package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerThreatDetectionSettings
 * Resource capturing the settings for the Container Threat Detection service.
**/
public class ContainerThreatDetectionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modules")
    public java.util.Map<String, Config> modules;
    public ContainerThreatDetectionSettings withModules(java.util.Map<String, Config> modules) {
        this.modules = modules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContainerThreatDetectionSettings withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ContainerThreatDetectionSettings withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEnablementState")
    public ContainerThreatDetectionSettingsServiceEnablementStateEnum serviceEnablementState;
    public ContainerThreatDetectionSettings withServiceEnablementState(ContainerThreatDetectionSettingsServiceEnablementStateEnum serviceEnablementState) {
        this.serviceEnablementState = serviceEnablementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ContainerThreatDetectionSettings withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}