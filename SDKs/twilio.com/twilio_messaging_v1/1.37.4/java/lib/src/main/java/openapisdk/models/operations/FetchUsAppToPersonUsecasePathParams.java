package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUsAppToPersonUsecasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessagingServiceSid")
    public String messagingServiceSid;
    public FetchUsAppToPersonUsecasePathParams withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}