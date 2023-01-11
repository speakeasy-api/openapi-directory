package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnnotationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public UpdateAnnotationPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}