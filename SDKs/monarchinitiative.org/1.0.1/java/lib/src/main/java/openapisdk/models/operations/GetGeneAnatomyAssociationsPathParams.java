package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneAnatomyAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneAnatomyAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}