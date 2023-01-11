package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostUrlchannelsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostUrlchannelsListPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}