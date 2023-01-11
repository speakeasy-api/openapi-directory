package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRateLimitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateRateLimitPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}