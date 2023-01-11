package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFunctionVersionContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionSid")
    public String functionSid;
    public FetchFunctionVersionContentPathParams withFunctionSid(String functionSid) {
        this.functionSid = functionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchFunctionVersionContentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchFunctionVersionContentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}