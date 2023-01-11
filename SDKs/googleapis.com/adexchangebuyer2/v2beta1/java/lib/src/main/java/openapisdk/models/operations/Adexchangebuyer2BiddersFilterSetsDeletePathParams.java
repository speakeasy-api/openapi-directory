package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public Adexchangebuyer2BiddersFilterSetsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}