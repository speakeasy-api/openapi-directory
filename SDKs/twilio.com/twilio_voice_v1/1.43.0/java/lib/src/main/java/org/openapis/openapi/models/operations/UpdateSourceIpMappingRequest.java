/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateSourceIpMappingRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSourceIpMappingUpdateSourceIpMappingRequest requestBody;

    public UpdateSourceIpMappingRequest withRequestBody(UpdateSourceIpMappingUpdateSourceIpMappingRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to update.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;

    public UpdateSourceIpMappingRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
    public UpdateSourceIpMappingRequest(@JsonProperty("Sid") String sid) {
        this.sid = sid;
  }
}
