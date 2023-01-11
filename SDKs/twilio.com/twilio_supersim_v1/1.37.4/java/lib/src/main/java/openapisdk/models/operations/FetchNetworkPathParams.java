package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchNetworkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}