package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCredentialListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCredentialListPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public FetchCredentialListPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}