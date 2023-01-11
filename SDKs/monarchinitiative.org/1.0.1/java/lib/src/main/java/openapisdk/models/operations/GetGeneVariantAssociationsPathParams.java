package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneVariantAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneVariantAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}