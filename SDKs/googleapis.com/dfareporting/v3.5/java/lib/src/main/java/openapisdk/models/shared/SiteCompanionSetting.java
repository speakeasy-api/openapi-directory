package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteCompanionSetting
 * Companion Settings
**/
public class SiteCompanionSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionsDisabled")
    public Boolean companionsDisabled;
    public SiteCompanionSetting withCompanionsDisabled(Boolean companionsDisabled) {
        this.companionsDisabled = companionsDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledSizes")
    public Size[] enabledSizes;
    public SiteCompanionSetting withEnabledSizes(Size[] enabledSizes) {
        this.enabledSizes = enabledSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageOnly")
    public Boolean imageOnly;
    public SiteCompanionSetting withImageOnly(Boolean imageOnly) {
        this.imageOnly = imageOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SiteCompanionSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
}