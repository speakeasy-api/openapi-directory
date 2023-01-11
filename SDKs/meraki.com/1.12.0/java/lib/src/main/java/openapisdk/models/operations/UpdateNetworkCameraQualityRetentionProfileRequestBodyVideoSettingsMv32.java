package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
 * Quality and resolution for MV32 camera models.
**/
public class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 {
    @JsonProperty("quality")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum quality;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 withQuality(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum resolution;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 withResolution(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}