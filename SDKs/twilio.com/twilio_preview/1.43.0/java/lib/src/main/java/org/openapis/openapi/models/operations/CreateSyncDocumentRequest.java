/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateSyncDocumentRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncDocumentCreateSyncDocumentRequest requestBody;

    public CreateSyncDocumentRequest withRequestBody(CreateSyncDocumentCreateSyncDocumentRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;

    public CreateSyncDocumentRequest withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    public CreateSyncDocumentRequest(@JsonProperty("ServiceSid") String serviceSid) {
        this.serviceSid = serviceSid;
  }
}
