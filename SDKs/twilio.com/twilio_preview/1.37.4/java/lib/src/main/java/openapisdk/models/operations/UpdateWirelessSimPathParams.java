package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWirelessSimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateWirelessSimPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}