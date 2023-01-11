package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchByocTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchByocTrunkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}