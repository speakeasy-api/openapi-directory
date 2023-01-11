package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public FetchSummaryPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}