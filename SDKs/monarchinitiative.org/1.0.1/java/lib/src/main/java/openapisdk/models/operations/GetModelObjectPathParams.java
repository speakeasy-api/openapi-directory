package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetModelObjectPathParams withId(String id) {
        this.id = id;
        return this;
    }
}