package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseaseSubstanceAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseaseSubstanceAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}