package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBuildPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateBuildPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}