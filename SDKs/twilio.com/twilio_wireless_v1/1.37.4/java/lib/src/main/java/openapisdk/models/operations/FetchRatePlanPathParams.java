package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRatePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRatePlanPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}