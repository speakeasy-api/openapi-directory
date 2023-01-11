package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendEmail")
    public String sendEmail;
    public ActivateUserQueryParams withSendEmail(String sendEmail) {
        this.sendEmail = sendEmail;
        return this;
    }
}