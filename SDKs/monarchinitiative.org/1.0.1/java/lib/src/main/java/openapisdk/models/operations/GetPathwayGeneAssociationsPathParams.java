package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathwayGeneAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPathwayGeneAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}