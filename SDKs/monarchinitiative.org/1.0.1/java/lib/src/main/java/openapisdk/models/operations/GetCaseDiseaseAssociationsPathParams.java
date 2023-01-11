package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCaseDiseaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCaseDiseaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}