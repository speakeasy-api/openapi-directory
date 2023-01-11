package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
 * Quality and resolution for MV12WE camera models.
**/
public class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We {
    @JsonProperty("quality")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum quality;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We withQuality(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum resolution;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We withResolution(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}