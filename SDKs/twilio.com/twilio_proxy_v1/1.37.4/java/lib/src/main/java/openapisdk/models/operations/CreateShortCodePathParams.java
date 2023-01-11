package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShortCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateShortCodePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}