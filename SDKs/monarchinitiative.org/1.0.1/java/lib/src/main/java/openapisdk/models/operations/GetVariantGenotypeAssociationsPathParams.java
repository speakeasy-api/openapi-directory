package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantGenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantGenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}