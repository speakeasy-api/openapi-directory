package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostUrlchannelsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostUrlchannelsInsertPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}