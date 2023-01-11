package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneOrthologDiseaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneOrthologDiseaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}