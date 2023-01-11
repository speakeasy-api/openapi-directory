package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWirelessRatePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchWirelessRatePlanPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}