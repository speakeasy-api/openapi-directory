package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneFunctionAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneFunctionAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}