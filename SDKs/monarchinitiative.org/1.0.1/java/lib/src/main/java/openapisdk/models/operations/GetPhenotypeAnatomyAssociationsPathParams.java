package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypeAnatomyAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPhenotypeAnatomyAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}