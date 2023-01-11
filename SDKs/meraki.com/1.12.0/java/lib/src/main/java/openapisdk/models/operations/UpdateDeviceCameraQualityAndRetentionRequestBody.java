package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCameraQualityAndRetentionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioRecordingEnabled")
    public Boolean audioRecordingEnabled;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withAudioRecordingEnabled(Boolean audioRecordingEnabled) {
        this.audioRecordingEnabled = audioRecordingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motionBasedRetentionEnabled")
    public Boolean motionBasedRetentionEnabled;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withMotionBasedRetentionEnabled(Boolean motionBasedRetentionEnabled) {
        this.motionBasedRetentionEnabled = motionBasedRetentionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motionDetectorVersion")
    public Long motionDetectorVersion;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withMotionDetectorVersion(Long motionDetectorVersion) {
        this.motionDetectorVersion = motionDetectorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum quality;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withQuality(UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum resolution;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withResolution(UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedBandwidthModeEnabled")
    public Boolean restrictedBandwidthModeEnabled;
    public UpdateDeviceCameraQualityAndRetentionRequestBody withRestrictedBandwidthModeEnabled(Boolean restrictedBandwidthModeEnabled) {
        this.restrictedBandwidthModeEnabled = restrictedBandwidthModeEnabled;
        return this;
    }
}