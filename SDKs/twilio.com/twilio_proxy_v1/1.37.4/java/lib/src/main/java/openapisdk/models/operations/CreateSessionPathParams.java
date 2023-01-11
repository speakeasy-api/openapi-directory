package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateSessionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}