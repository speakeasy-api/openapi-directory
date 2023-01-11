package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
 * Quality and resolution for MV22X/MV72X camera models.
**/
public class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X {
    @JsonProperty("quality")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum quality;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X withQuality(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum resolution;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X withResolution(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}