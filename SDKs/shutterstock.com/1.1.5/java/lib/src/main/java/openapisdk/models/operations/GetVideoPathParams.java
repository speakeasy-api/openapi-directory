package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVideoPathParams withId(String id) {
        this.id = id;
        return this;
    }
}