package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateUserPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}