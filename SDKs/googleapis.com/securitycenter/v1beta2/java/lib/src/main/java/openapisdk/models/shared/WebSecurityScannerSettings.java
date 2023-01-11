package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebSecurityScannerSettings
 * Resource capturing the settings for the Web Security Scanner service.
**/
public class WebSecurityScannerSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modules")
    public java.util.Map<String, Config> modules;
    public WebSecurityScannerSettings withModules(java.util.Map<String, Config> modules) {
        this.modules = modules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebSecurityScannerSettings withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEnablementState")
    public WebSecurityScannerSettingsServiceEnablementStateEnum serviceEnablementState;
    public WebSecurityScannerSettings withServiceEnablementState(WebSecurityScannerSettingsServiceEnablementStateEnum serviceEnablementState) {
        this.serviceEnablementState = serviceEnablementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public WebSecurityScannerSettings withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}