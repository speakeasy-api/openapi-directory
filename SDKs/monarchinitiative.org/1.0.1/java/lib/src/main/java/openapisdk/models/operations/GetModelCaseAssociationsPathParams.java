package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelCaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelCaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}