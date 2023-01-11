package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostCustomchannelsListPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}