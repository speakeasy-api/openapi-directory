package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelDiseaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelDiseaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}