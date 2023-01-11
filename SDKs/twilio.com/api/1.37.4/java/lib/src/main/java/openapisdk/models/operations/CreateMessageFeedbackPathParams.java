package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateMessageFeedbackPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public CreateMessageFeedbackPathParams withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
}