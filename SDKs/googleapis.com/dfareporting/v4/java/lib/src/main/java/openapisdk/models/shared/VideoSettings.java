package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoSettings
 * Video Settings
**/
public class VideoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionSettings")
    public CompanionSetting companionSettings;
    public VideoSettings withCompanionSettings(CompanionSetting companionSettings) {
        this.companionSettings = companionSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSeconds")
    public Integer durationSeconds;
    public VideoSettings withDurationSeconds(Integer durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VideoSettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaEnabled")
    public Boolean obaEnabled;
    public VideoSettings withObaEnabled(Boolean obaEnabled) {
        this.obaEnabled = obaEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaSettings")
    public ObaIcon obaSettings;
    public VideoSettings withObaSettings(ObaIcon obaSettings) {
        this.obaSettings = obaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public VideoSettingsOrientationEnum orientation;
    public VideoSettings withOrientation(VideoSettingsOrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherSpecificationId")
    public String publisherSpecificationId;
    public VideoSettings withPublisherSpecificationId(String publisherSpecificationId) {
        this.publisherSpecificationId = publisherSpecificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippableSettings")
    public SkippableSetting skippableSettings;
    public VideoSettings withSkippableSettings(SkippableSetting skippableSettings) {
        this.skippableSettings = skippableSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcodeSettings")
    public TranscodeSetting transcodeSettings;
    public VideoSettings withTranscodeSettings(TranscodeSetting transcodeSettings) {
        this.transcodeSettings = transcodeSettings;
        return this;
    }
}