package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFunctionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionSid")
    public String functionSid;
    public FetchFunctionVersionPathParams withFunctionSid(String functionSid) {
        this.functionSid = functionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchFunctionVersionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchFunctionVersionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}