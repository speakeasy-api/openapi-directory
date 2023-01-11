package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseasePublicationAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseasePublicationAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}