package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetImagesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}