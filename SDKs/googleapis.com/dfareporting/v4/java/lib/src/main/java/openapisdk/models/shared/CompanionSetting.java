package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompanionSetting
 * Companion Settings
**/
public class CompanionSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionsDisabled")
    public Boolean companionsDisabled;
    public CompanionSetting withCompanionsDisabled(Boolean companionsDisabled) {
        this.companionsDisabled = companionsDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledSizes")
    public Size[] enabledSizes;
    public CompanionSetting withEnabledSizes(Size[] enabledSizes) {
        this.enabledSizes = enabledSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageOnly")
    public Boolean imageOnly;
    public CompanionSetting withImageOnly(Boolean imageOnly) {
        this.imageOnly = imageOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CompanionSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
}