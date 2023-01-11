package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public ListEventPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}