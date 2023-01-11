package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWirelessUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SimSid")
    public String simSid;
    public FetchWirelessUsagePathParams withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
}