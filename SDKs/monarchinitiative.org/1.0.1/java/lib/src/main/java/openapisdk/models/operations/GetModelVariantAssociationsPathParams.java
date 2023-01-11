package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelVariantAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelVariantAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}