package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerThreatDetectionSettingsInput
 * Resource capturing the settings for the Container Threat Detection service.
**/
public class ContainerThreatDetectionSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modules")
    public java.util.Map<String, Config> modules;
    public ContainerThreatDetectionSettingsInput withModules(java.util.Map<String, Config> modules) {
        this.modules = modules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContainerThreatDetectionSettingsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEnablementState")
    public ContainerThreatDetectionSettingsServiceEnablementStateEnum serviceEnablementState;
    public ContainerThreatDetectionSettingsInput withServiceEnablementState(ContainerThreatDetectionSettingsServiceEnablementStateEnum serviceEnablementState) {
        this.serviceEnablementState = serviceEnablementState;
        return this;
    }
}