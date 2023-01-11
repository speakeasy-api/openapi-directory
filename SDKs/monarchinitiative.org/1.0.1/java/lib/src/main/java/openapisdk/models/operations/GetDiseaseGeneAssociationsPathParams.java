package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseaseGeneAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseaseGeneAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}