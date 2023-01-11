package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
 * Quality and resolution for MV32 camera models.
**/
public class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 {
    @JsonProperty("quality")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum quality;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 withQuality(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum resolution;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 withResolution(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}