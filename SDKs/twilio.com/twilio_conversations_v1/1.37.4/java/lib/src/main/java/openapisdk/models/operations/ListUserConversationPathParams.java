package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public ListUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}