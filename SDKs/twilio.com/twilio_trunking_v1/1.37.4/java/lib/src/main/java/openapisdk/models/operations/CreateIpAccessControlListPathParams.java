package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpAccessControlListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public CreateIpAccessControlListPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}