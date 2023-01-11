package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantCaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantCaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}