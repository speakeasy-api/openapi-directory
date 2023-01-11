package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAppPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}