package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersCreativesWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersCreativesWatchPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}