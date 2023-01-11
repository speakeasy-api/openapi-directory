package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
 * Quality and resolution for MV21/MV71 camera models.
**/
public class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 {
    @JsonProperty("quality")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum quality;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 withQuality(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum resolution;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 withResolution(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}