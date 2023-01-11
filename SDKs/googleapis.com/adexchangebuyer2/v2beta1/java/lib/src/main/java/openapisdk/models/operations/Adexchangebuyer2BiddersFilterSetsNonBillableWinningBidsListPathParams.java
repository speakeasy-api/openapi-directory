package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}