package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveAccountTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveAccountTransactionsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}