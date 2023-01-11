package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrustProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTrustProductPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}