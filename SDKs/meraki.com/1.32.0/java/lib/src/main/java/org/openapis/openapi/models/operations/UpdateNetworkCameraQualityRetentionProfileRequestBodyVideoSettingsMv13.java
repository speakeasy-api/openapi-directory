/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13 - Quality and resolution for MV13 camera models.
 */
public class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13 {
    /**
     * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
     */
    @JsonProperty("quality")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum quality;

    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13 withQuality(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    
    /**
     * Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.
     */
    @JsonProperty("resolution")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum resolution;

    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13 withResolution(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13(@JsonProperty("quality") UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum quality, @JsonProperty("resolution") UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum resolution) {
        this.quality = quality;
        this.resolution = resolution;
  }
}
