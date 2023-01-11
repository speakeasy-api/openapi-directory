package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}