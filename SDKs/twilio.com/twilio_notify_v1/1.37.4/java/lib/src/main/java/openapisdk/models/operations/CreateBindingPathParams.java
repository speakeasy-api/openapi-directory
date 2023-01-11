package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateBindingPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}