package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenotypePublicationAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenotypePublicationAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}