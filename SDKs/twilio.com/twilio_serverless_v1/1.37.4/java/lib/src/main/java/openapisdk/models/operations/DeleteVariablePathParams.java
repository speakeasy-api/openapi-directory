package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVariablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EnvironmentSid")
    public String environmentSid;
    public DeleteVariablePathParams withEnvironmentSid(String environmentSid) {
        this.environmentSid = environmentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteVariablePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteVariablePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}