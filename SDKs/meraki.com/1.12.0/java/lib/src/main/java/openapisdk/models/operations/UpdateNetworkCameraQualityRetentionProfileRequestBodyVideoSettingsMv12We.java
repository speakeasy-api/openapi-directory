package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
 * Quality and resolution for MV12WE camera models.
**/
public class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We {
    @JsonProperty("quality")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum quality;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We withQuality(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum resolution;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We withResolution(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}