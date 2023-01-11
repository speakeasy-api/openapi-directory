package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIpAccessControlListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public ListIpAccessControlListPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}