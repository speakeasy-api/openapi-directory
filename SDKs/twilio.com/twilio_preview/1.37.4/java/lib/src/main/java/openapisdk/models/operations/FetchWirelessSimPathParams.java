package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWirelessSimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchWirelessSimPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}