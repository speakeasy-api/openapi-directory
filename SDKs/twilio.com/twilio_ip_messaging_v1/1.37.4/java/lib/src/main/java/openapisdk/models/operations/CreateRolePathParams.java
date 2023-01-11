package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateRolePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}