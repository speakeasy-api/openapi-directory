package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAnnotationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public FetchAnnotationPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}