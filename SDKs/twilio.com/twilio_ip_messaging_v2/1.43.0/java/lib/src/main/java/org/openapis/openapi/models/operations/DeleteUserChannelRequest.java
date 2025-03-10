/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteUserChannelRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;

    public DeleteUserChannelRequest withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;

    public DeleteUserChannelRequest withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;

    public DeleteUserChannelRequest withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
    
    public DeleteUserChannelRequest(@JsonProperty("ChannelSid") String channelSid, @JsonProperty("ServiceSid") String serviceSid, @JsonProperty("UserSid") String userSid) {
        this.channelSid = channelSid;
        this.serviceSid = serviceSid;
        this.userSid = userSid;
  }
}
