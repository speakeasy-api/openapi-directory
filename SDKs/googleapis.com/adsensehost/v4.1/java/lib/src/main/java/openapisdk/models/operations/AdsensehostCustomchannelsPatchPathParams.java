package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostCustomchannelsPatchPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}