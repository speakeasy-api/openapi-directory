package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}