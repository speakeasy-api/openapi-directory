package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantModelAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantModelAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}