package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelGeneAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelGeneAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}