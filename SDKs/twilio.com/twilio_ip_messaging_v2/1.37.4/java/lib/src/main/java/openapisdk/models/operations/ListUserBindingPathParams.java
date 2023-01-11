package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserBindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListUserBindingPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public ListUserBindingPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}