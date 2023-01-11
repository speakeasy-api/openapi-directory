package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConnectionPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConnectionPolicyPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}