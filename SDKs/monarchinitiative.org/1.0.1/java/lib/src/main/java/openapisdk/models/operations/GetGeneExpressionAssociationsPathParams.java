package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneExpressionAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneExpressionAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}