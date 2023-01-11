package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTestUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTestUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}