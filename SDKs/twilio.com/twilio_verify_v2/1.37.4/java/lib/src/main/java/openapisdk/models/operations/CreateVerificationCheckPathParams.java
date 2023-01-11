package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVerificationCheckPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateVerificationCheckPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}