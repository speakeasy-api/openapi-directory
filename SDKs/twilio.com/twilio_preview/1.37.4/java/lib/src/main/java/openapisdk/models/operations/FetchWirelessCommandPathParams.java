package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWirelessCommandPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchWirelessCommandPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}