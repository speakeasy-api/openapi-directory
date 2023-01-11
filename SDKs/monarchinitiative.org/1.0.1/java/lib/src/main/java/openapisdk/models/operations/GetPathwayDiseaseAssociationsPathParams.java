package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathwayDiseaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPathwayDiseaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}