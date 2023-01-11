package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public Adexchangebuyer2BiddersFilterSetsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}