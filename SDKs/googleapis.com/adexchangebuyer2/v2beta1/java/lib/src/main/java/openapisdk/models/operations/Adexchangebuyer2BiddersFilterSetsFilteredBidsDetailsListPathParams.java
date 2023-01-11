package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeStatusId")
    public Long creativeStatusId;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams withCreativeStatusId(Long creativeStatusId) {
        this.creativeStatusId = creativeStatusId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}