package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}