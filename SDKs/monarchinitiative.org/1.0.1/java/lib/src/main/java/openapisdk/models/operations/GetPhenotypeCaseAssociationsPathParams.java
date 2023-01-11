package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypeCaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPhenotypeCaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}