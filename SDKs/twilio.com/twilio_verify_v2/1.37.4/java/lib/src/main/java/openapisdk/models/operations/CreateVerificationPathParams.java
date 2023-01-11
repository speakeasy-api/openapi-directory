package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVerificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateVerificationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}