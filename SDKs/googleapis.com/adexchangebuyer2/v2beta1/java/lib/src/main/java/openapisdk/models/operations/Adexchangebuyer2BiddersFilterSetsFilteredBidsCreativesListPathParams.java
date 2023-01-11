package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeStatusId")
    public Long creativeStatusId;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams withCreativeStatusId(Long creativeStatusId) {
        this.creativeStatusId = creativeStatusId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}