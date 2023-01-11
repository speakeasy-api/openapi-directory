package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCredentialListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public ListCredentialListPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}