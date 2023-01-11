package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDataSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SimSid")
    public String simSid;
    public ListDataSessionPathParams withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
}