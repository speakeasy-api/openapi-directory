package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSettingsRequest
 * Update Form's FormSettings.
**/
public class UpdateSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public FormSettings settings;
    public UpdateSettingsRequest withSettings(FormSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateSettingsRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}