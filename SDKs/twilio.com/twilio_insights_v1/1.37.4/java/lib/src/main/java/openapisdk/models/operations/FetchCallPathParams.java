package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCallPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}