package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetApplicationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}