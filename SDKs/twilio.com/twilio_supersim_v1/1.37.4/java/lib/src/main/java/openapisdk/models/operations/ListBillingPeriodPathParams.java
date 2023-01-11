package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBillingPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SimSid")
    public String simSid;
    public ListBillingPeriodPathParams withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
}