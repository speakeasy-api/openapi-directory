package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCaseVariantAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCaseVariantAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}