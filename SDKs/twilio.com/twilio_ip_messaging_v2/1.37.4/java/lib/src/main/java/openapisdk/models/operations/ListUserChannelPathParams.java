package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListUserChannelPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public ListUserChannelPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}