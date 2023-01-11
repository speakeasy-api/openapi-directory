package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRatePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateRatePlanPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}