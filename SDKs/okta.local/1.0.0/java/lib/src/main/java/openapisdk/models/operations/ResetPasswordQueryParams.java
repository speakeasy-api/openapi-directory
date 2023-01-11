package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetPasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendEmail")
    public String sendEmail;
    public ResetPasswordQueryParams withSendEmail(String sendEmail) {
        this.sendEmail = sendEmail;
        return this;
    }
}