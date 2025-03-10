/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdatePlayerStreamerRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdatePlayerStreamerUpdatePlayerStreamerRequest requestBody;
    public UpdatePlayerStreamerRequest withRequestBody(UpdatePlayerStreamerUpdatePlayerStreamerRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The SID of the PlayerStreamer resource to update.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdatePlayerStreamerRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
