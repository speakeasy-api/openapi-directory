package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCaseModelAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCaseModelAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}