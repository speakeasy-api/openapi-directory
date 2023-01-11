package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCameraQualityRetentionProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioRecordingEnabled")
    public Boolean audioRecordingEnabled;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withAudioRecordingEnabled(Boolean audioRecordingEnabled) {
        this.audioRecordingEnabled = audioRecordingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudArchiveEnabled")
    public Boolean cloudArchiveEnabled;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withCloudArchiveEnabled(Boolean cloudArchiveEnabled) {
        this.cloudArchiveEnabled = cloudArchiveEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetentionDays")
    public Long maxRetentionDays;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withMaxRetentionDays(Long maxRetentionDays) {
        this.maxRetentionDays = maxRetentionDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motionBasedRetentionEnabled")
    public Boolean motionBasedRetentionEnabled;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withMotionBasedRetentionEnabled(Boolean motionBasedRetentionEnabled) {
        this.motionBasedRetentionEnabled = motionBasedRetentionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motionDetectorVersion")
    public Long motionDetectorVersion;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withMotionDetectorVersion(Long motionDetectorVersion) {
        this.motionDetectorVersion = motionDetectorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedBandwidthModeEnabled")
    public Boolean restrictedBandwidthModeEnabled;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withRestrictedBandwidthModeEnabled(Boolean restrictedBandwidthModeEnabled) {
        this.restrictedBandwidthModeEnabled = restrictedBandwidthModeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleId")
    public String scheduleId;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoSettings")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings videoSettings;
    public UpdateNetworkCameraQualityRetentionProfileRequestBody withVideoSettings(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings videoSettings) {
        this.videoSettings = videoSettings;
        return this;
    }
}