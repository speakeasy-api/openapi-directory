/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateRawRequest {
    /**
     * The Shopper details to update
     */
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] requestBody;

    public UpdateRawRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The ID of the Shopper to update
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shopperId")
    public String shopperId;

    public UpdateRawRequest withShopperId(String shopperId) {
        this.shopperId = shopperId;
        return this;
    }
    
    public UpdateRawRequest(@JsonProperty("RequestBody") byte[] requestBody, @JsonProperty("shopperId") String shopperId) {
        this.requestBody = requestBody;
        this.shopperId = shopperId;
  }
}
