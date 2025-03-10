/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreatePlayerStreamerPlaybackGrantRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest requestBody;
    public CreatePlayerStreamerPlaybackGrantRequest withRequestBody(CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The unique string generated to identify the PlayerStreamer resource associated with this PlaybackGrant
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public CreatePlayerStreamerPlaybackGrantRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
