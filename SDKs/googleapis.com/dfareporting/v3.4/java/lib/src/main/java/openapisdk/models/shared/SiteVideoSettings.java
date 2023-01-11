package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteVideoSettings
 * Video Settings
**/
public class SiteVideoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionSettings")
    public SiteCompanionSetting companionSettings;
    public SiteVideoSettings withCompanionSettings(SiteCompanionSetting companionSettings) {
        this.companionSettings = companionSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SiteVideoSettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaEnabled")
    public Boolean obaEnabled;
    public SiteVideoSettings withObaEnabled(Boolean obaEnabled) {
        this.obaEnabled = obaEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaSettings")
    public ObaIcon obaSettings;
    public SiteVideoSettings withObaSettings(ObaIcon obaSettings) {
        this.obaSettings = obaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public SiteVideoSettingsOrientationEnum orientation;
    public SiteVideoSettings withOrientation(SiteVideoSettingsOrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippableSettings")
    public SiteSkippableSetting skippableSettings;
    public SiteVideoSettings withSkippableSettings(SiteSkippableSetting skippableSettings) {
        this.skippableSettings = skippableSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcodeSettings")
    public SiteTranscodeSetting transcodeSettings;
    public SiteVideoSettings withTranscodeSettings(SiteTranscodeSetting transcodeSettings) {
        this.transcodeSettings = transcodeSettings;
        return this;
    }
}