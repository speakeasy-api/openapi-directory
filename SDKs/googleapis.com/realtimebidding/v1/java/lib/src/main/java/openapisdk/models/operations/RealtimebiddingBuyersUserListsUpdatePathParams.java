package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RealtimebiddingBuyersUserListsUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}