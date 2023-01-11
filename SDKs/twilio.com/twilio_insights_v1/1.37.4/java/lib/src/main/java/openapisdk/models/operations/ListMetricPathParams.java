package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public ListMetricPathParams withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
}