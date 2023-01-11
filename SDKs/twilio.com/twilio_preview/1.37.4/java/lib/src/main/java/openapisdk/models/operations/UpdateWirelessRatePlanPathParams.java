package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWirelessRatePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateWirelessRatePlanPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}