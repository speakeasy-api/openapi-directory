package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRatePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRatePlanPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}