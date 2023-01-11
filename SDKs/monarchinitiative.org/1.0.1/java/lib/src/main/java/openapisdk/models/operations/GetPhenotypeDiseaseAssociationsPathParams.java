package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypeDiseaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPhenotypeDiseaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}