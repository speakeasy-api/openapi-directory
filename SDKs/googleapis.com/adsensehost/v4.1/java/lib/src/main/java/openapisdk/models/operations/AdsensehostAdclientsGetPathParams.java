package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAdclientsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostAdclientsGetPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}