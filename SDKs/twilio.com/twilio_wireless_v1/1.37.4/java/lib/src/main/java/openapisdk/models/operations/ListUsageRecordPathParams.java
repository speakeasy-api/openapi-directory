package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SimSid")
    public String simSid;
    public ListUsageRecordPathParams withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
}