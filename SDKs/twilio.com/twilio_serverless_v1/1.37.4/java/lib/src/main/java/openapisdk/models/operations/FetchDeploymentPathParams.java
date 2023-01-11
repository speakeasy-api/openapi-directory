package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EnvironmentSid")
    public String environmentSid;
    public FetchDeploymentPathParams withEnvironmentSid(String environmentSid) {
        this.environmentSid = environmentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchDeploymentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchDeploymentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}