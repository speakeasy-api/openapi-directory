package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBuyersUserListsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}