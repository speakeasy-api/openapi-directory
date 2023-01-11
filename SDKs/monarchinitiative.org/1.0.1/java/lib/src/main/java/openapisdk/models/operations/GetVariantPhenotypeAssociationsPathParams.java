package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantPhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantPhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}