package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsLosingBidsListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}