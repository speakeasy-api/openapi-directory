package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneModelAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneModelAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}