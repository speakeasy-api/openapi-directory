package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTrunkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}