package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}