package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
 * Quality and resolution for MV22X/MV72X camera models.
**/
public class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X {
    @JsonProperty("quality")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum quality;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X withQuality(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonProperty("resolution")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum resolution;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X withResolution(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}