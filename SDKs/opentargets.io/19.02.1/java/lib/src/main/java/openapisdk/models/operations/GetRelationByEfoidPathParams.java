package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationByEfoidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=disease")
    public String disease;
    public GetRelationByEfoidPathParams withDisease(String disease) {
        this.disease = disease;
        return this;
    }
}