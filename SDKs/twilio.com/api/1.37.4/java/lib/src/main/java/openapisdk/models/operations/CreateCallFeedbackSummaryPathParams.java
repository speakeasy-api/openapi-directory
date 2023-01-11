package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallFeedbackSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateCallFeedbackSummaryPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
}