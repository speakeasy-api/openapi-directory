package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicationVariantAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPublicationVariantAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}