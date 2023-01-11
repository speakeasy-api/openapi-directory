package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForgotPasswordOneTimeCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendEmail")
    public String sendEmail;
    public ForgotPasswordOneTimeCodeQueryParams withSendEmail(String sendEmail) {
        this.sendEmail = sendEmail;
        return this;
    }
}