package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersEndpointsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RealtimebiddingBiddersEndpointsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}