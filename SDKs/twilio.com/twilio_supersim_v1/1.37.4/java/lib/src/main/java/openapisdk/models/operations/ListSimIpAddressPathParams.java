package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSimIpAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SimSid")
    public String simSid;
    public ListSimIpAddressPathParams withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
}