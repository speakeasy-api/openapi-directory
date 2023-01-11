package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantGeneAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantGeneAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}