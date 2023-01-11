package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneInteractionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneInteractionsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}