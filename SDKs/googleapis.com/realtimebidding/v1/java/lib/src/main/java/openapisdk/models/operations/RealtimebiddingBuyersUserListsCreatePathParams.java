package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersUserListsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBuyersUserListsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}