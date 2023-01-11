package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypePathwayAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPhenotypePathwayAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}