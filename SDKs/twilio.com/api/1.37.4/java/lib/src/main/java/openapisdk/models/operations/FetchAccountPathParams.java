package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAccountPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}