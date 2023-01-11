package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchContentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}