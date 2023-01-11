package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveAccountBalancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveAccountBalancesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}