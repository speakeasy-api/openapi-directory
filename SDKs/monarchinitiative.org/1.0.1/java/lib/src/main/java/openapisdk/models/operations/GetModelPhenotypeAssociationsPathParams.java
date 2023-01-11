package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelPhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelPhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}