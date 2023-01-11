package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsAppToPersonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateUsAppToPersonPathParams withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}