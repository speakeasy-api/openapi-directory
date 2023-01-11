package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathwayPhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPathwayPhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}