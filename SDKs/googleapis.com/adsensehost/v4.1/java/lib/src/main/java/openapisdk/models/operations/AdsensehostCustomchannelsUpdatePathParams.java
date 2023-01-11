package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostCustomchannelsUpdatePathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}