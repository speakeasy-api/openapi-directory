package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneHomologAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneHomologAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}