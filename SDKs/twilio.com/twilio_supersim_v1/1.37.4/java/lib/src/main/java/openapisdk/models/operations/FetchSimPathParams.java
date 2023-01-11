package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSimPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}