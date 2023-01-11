package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlphaSenderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateAlphaSenderPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}