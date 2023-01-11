package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchNetworkAccessProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchNetworkAccessProfilePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}