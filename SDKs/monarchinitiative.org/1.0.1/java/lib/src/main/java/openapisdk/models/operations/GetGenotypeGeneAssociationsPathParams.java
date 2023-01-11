package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenotypeGeneAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenotypeGeneAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}