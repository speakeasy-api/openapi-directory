package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVariablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EnvironmentSid")
    public String environmentSid;
    public CreateVariablePathParams withEnvironmentSid(String environmentSid) {
        this.environmentSid = environmentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateVariablePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}