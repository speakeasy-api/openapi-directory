package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigureManagementSettingsRequestInput
 * Request for the `ConfigureManagementSettings` method.
**/
public class ConfigureManagementSettingsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementSettings")
    public ManagementSettingsInput managementSettings;
    public ConfigureManagementSettingsRequestInput withManagementSettings(ManagementSettingsInput managementSettings) {
        this.managementSettings = managementSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public ConfigureManagementSettingsRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}