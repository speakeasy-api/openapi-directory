package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsAppToPersonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessagingServiceSid")
    public String messagingServiceSid;
    public DeleteUsAppToPersonPathParams withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteUsAppToPersonPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}