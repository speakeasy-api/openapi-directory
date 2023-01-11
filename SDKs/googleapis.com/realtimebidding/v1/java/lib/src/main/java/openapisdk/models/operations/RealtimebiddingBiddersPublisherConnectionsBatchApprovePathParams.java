package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}