package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}