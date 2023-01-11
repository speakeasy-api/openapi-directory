package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenePublicationAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenePublicationAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}