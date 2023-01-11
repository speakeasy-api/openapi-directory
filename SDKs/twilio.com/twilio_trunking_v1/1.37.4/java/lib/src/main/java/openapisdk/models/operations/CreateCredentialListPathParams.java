package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public CreateCredentialListPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}