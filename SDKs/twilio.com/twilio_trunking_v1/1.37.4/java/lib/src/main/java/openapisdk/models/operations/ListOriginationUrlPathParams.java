package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOriginationUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public ListOriginationUrlPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}