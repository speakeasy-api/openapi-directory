package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersCreativesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RealtimebiddingBuyersCreativesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}