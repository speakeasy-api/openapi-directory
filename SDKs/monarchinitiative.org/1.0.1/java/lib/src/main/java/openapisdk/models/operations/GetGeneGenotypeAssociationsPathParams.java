package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneGenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneGenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}