package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelPublicationAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelPublicationAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}