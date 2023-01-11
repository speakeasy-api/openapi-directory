package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenotypeGenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenotypeGenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}