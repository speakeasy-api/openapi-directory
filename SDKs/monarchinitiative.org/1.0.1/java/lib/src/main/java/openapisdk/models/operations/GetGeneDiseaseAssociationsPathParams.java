package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneDiseaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGeneDiseaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}