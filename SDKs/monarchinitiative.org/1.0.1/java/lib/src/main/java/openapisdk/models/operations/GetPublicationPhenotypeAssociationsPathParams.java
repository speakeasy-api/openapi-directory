package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicationPhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPublicationPhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}