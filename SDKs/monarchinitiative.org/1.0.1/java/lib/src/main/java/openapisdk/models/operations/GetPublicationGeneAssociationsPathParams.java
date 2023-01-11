package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicationGeneAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPublicationGeneAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}