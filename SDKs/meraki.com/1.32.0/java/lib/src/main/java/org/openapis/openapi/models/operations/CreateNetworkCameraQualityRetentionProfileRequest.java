/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateNetworkCameraQualityRetentionProfileRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkCameraQualityRetentionProfileRequestBody requestBody;

    public CreateNetworkCameraQualityRetentionProfileRequest withRequestBody(CreateNetworkCameraQualityRetentionProfileRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;

    public CreateNetworkCameraQualityRetentionProfileRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
    public CreateNetworkCameraQualityRetentionProfileRequest(@JsonProperty("RequestBody") CreateNetworkCameraQualityRetentionProfileRequestBody requestBody, @JsonProperty("networkId") String networkId) {
        this.requestBody = requestBody;
        this.networkId = networkId;
  }
}
