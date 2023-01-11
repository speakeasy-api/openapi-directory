package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
 * Quality and resolution for MV21/MV71 camera models.
**/
public class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 {
    @JsonProperty("quality")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum quality;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 withQuality(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum resolution;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 withResolution(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}