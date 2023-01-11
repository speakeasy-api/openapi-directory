package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownerName")
    public String ownerName;
    public Adexchangebuyer2BiddersFilterSetsListPathParams withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
}