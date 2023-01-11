package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigureContactSettingsRequest
 * Request for the `ConfigureContactSettings` method.
**/
public class ConfigureContactSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactNotices")
    public ConfigureContactSettingsRequestContactNoticesEnum[] contactNotices;
    public ConfigureContactSettingsRequest withContactNotices(ConfigureContactSettingsRequestContactNoticesEnum[] contactNotices) {
        this.contactNotices = contactNotices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactSettings")
    public ContactSettings contactSettings;
    public ConfigureContactSettingsRequest withContactSettings(ContactSettings contactSettings) {
        this.contactSettings = contactSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public ConfigureContactSettingsRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public ConfigureContactSettingsRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}