package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseasePathwayAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseasePathwayAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}