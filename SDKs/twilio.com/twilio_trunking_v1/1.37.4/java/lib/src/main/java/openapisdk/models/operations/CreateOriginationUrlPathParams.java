package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOriginationUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public CreateOriginationUrlPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}