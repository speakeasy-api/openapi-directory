/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteNetworkCameraQualityRetentionProfileRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;

    public DeleteNetworkCameraQualityRetentionProfileRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=qualityRetentionProfileId")
    public String qualityRetentionProfileId;

    public DeleteNetworkCameraQualityRetentionProfileRequest withQualityRetentionProfileId(String qualityRetentionProfileId) {
        this.qualityRetentionProfileId = qualityRetentionProfileId;
        return this;
    }
    
    public DeleteNetworkCameraQualityRetentionProfileRequest(@JsonProperty("networkId") String networkId, @JsonProperty("qualityRetentionProfileId") String qualityRetentionProfileId) {
        this.networkId = networkId;
        this.qualityRetentionProfileId = qualityRetentionProfileId;
  }
}
