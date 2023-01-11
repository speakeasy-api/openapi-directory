package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionSid")
    public String functionSid;
    public ListFunctionVersionPathParams withFunctionSid(String functionSid) {
        this.functionSid = functionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListFunctionVersionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}