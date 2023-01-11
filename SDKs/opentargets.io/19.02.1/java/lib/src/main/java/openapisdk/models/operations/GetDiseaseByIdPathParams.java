package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseaseByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=disease")
    public String disease;
    public GetDiseaseByIdPathParams withDisease(String disease) {
        this.disease = disease;
        return this;
    }
}