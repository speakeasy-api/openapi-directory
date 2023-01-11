package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsAppToPersonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessagingServiceSid")
    public String messagingServiceSid;
    public ListUsAppToPersonPathParams withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}