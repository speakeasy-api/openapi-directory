package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkCameraQualityRetentionProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioRecordingEnabled")
    public Boolean audioRecordingEnabled;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withAudioRecordingEnabled(Boolean audioRecordingEnabled) {
        this.audioRecordingEnabled = audioRecordingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudArchiveEnabled")
    public Boolean cloudArchiveEnabled;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withCloudArchiveEnabled(Boolean cloudArchiveEnabled) {
        this.cloudArchiveEnabled = cloudArchiveEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetentionDays")
    public Long maxRetentionDays;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withMaxRetentionDays(Long maxRetentionDays) {
        this.maxRetentionDays = maxRetentionDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motionBasedRetentionEnabled")
    public Boolean motionBasedRetentionEnabled;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withMotionBasedRetentionEnabled(Boolean motionBasedRetentionEnabled) {
        this.motionBasedRetentionEnabled = motionBasedRetentionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motionDetectorVersion")
    public Long motionDetectorVersion;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withMotionDetectorVersion(Long motionDetectorVersion) {
        this.motionDetectorVersion = motionDetectorVersion;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedBandwidthModeEnabled")
    public Boolean restrictedBandwidthModeEnabled;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withRestrictedBandwidthModeEnabled(Boolean restrictedBandwidthModeEnabled) {
        this.restrictedBandwidthModeEnabled = restrictedBandwidthModeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleId")
    public String scheduleId;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoSettings")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings videoSettings;
    public CreateNetworkCameraQualityRetentionProfileRequestBody withVideoSettings(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings videoSettings) {
        this.videoSettings = videoSettings;
        return this;
    }
}