package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenotypeCaseAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenotypeCaseAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}