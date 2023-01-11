package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseaseModelAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseaseModelAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}