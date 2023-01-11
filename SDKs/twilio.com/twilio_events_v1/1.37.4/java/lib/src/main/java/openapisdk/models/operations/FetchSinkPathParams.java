package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSinkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}